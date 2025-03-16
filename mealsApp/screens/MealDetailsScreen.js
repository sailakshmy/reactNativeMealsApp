import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  console.log("log", mealId);
  const currentMeal = MEALS?.filter((meal) => meal?.id === mealId)?.[0];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: currentMeal?.title,
    });
  });
  return (
    <View>
      <Text>{currentMeal?.title}</Text>
    </View>
  );
};

export default MealDetailsScreen;
