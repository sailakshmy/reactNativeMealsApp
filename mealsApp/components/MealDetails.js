import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  customStyles,
  customTextStyle,
}) => {
  return (
    <View style={[styles.details, customStyles]}>
      <Text style={[styles.detailItem, customTextStyle]}>{duration} mins</Text>
      <Text style={[styles.detailItem, customTextStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, customTextStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetails;
