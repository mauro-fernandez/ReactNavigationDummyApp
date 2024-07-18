import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {} 
});

function FavoritesContextProvider({children}) {
    const [favoritesMealIds, setFavoritesMealsIds] = useState([]);

    function addFavorite(id) {
        setFavoritesMealsIds((currentFavIds) => [...currentFavIds, id])
    }

    function removeFavorite(id) {
        setFavoritesMealsIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id))
    }

    const value = {
        ids: favoritesMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider