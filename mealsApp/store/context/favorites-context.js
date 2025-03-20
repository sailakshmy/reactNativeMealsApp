import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favMealIds, setFavMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavMealIds((prevState) => [...prevState, id]);
  };

  const removeFavorite = (id) => {
    setFavMealIds((currentFavMealIds) =>
      currentFavMealIds?.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favMealIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
