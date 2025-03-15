import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealsOverviewScreen = () => {
  //   const filteredMeal = MEALS?.filter();

  return (
    <View style={styles.container}>
      <Text>Meals Overview page</Text>
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
