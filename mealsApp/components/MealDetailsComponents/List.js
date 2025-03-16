import React from "react";
import { StyleSheet, Text, View } from "react-native";

const List = ({ listItems }) => {
  return listItems?.map((listItem) => (
    <View style={styles.listItem} key={listItem}>
      <Text style={styles.listItemText}>{listItem}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  listItemText: {
    color: "#3f2f25",
    textAlign: "center",
  },
});

export default List;
