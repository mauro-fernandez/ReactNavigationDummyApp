import { MEALS, CATEGORIES } from '../data/dummy-data'
import {  useLayoutEffect } from 'react'
import { MealsList } from '../components/MealsList/MealsList'

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

    return <MealsList item={displayedMeals} />

}
