import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import { MealItem } from '../components/MealsItem'
import {  useLayoutEffect } from 'react'

export const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        // el indexOf devuelve -1 si no lo contiene, caso contrario, devuelve el indice del elemento
        return mealItem.categoryIds.indexOf((catId)) >= 0
    })

    // Con useEffect, primero carga y despues le cambia el titulo. En ios se nota mucho más, por eso 
    // se reemplaza con useLayout para que lo haga sincronamente al levantar el componente
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    },[catId,navigation])

    const renderMealItem = (itemData) => {
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return (
            <MealItem {...mealItemProps}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
       </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
})