import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  // const route = useRoute();
  const { categoryId } = route.params;
  // console.log("categoryId", categoryId);
  const filteredMeal = MEALS?.filter((meal) =>
    meal?.categoryIds?.includes?.(categoryId)
  );
  console.log(filteredMeal, "filter");

  const renderMealItem = function (itemData) {
    return <MealItem item={itemData?.item} />;
  };

  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview page - {categoryId}</Text> */}
      <FlatList
        data={filteredMeal}
        renderItem={renderMealItem}
        keyExtractor={(item) => item?.id}
      />
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
