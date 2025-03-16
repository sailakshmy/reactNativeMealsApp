import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
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
