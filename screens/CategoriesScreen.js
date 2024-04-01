import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { CategoryGridTitle } from '../data/components/CategoryGridTitle'

const renderCategoryItem = (itemData) => {
    return (
        <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
    )
}

export const CategoriesScreen = () => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />

    )
}