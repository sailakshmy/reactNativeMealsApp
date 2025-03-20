import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealsList/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  // const favoriteMealsContext = useContext(FavoritesContext);
  // const { ids } = favoriteMealsContext;
  const ids = useSelector((state) => state?.favoriteMeals?.ids);
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
