import { View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native'
import { MEALS } from '../data/dummy-data'
import { MealDetailInfo } from '../components/MealDetailInfo'
import { Subtitle } from '../components/MealDetail/Subtitle'
import { List } from '../components/MealDetail/List'
import { useLayoutEffect } from 'react'
import { IconStarButton } from '../components/IconButton'


export const MealDetailScreen = ({route, navigation}) => {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const onButtonPressHandler = () => {
        console.log('pressed')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconStarButton iconName={'star'} color={'white'} onPress={onButtonPressHandler}/>
            }
        })
    },[])
    
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