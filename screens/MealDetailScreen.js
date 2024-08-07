import { View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native'
import { MEALS } from '../data/dummy-data'
import { MealDetailInfo } from '../components/MealDetailInfo'
import { Subtitle } from '../components/MealDetail/Subtitle'
import { List } from '../components/MealDetail/List'
import { useLayoutEffect, useContext } from 'react'
import { IconStarButton } from '../components/IconButton'
import { FavoritesContext } from '../store/context/favorites-context'


export const MealDetailScreen = ({route, navigation}) => {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const favoriteMealCtx = useContext(FavoritesContext);

    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)
    
    const changeFavoriteStatusHandler = () => {
        if(mealIsFavorite){
            favoriteMealCtx.removeFavorite(mealId)
        } else {
            favoriteMealCtx.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconStarButton iconName={mealIsFavorite? 'star' : 'star-outline'} color={'white'} onPress={changeFavoriteStatusHandler}/>
            }
        })
    },[navigation,changeFavoriteStatusHandler])
    
    return (
        <ScrollView style={styles.rootContainer} showsVerticalScrollIndicator={false}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetailInfo
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
})