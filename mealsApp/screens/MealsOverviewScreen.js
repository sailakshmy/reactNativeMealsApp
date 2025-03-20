import React, { useLayoutEffect } from "react";
import MealList from "../components/MealsList/MealList";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  // const route = useRoute();
  const { categoryId, categoryTitle } = route.params;

  useLayoutEffect(() => {
    // const categoryTitle = CATEGORIES?.find(
    //   (category) => category?.id === categoryId
    // )?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const filteredMeal = MEALS?.filter((meal) =>
    meal?.categoryIds?.includes?.(categoryId)
  );

  return <MealList mealList={filteredMeal} />;
};

export default MealsOverviewScreen;
