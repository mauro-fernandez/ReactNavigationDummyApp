import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { CategoryGridTitle } from '../data/components/CategoryGridTitle'



// la prop navigation la obtiene de haber seteado este componente en <Stack.Screen>
// sus hijos no heredan esta prop
export const CategoriesScreen = ({navigation}) => {
    const renderCategoryItem = (itemData) => {
        const onPressHandler = () => {
            navigation.navigate('MealsOverview')
        }
        return (
            <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}/>
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />

    )
}