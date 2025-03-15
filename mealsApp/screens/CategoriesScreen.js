import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (item) => {
    const onPressCategoryItem = () => {
      navigation.navigate("MealsOverview");
    };
    return (
      <CategoryGridTile category={item?.item} onPress={onPressCategoryItem} />
    );
  };
  return (
    <>
      <FlatList
        style={styles.container}
        data={CATEGORIES}
        keyExtractor={(item) => item?.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 18,
  },
});

export default CategoriesScreen;
