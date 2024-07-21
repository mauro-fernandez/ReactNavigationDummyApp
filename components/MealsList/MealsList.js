import { View, FlatList, StyleSheet } from "react-native"
import { MealItem } from "./MealsItem"

export const MealsList = ({item}) => {
    
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
                data={item}
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