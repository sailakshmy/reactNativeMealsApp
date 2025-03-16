import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  // const route = useRoute();
  const { categoryId } = route.params;
  console.log("categoryId", categoryId);
  const filteredMeal = MEALS?.filter((meal) => meal);

  return (
    <View style={styles.container}>
      <Text>Meals Overview page - {categoryId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default MealsOverviewScreen;
