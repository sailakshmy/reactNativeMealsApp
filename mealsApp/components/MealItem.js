import React from "react";
import { Text, View } from "react-native";

const MealItem = ({ item }) => {
  console.log("item", item);
  return (
    <View>
      <Text>{item?.title}</Text>
    </View>
  );
};

export default MealItem;
