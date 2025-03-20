import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ mealList }) => {
  const renderMealItem = function (itemData) {
    return <MealItem item={itemData?.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mealList}
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

export default MealList;
