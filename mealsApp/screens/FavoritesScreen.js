import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealsList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);
  const { ids } = favoriteMealsContext;
  const favoriteMeals = MEALS?.filter((meal) => ids?.includes(meal.id));
  if (favoriteMeals?.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealList mealList={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default FavoritesScreen;
