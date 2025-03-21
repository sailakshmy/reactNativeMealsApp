import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetailsComponents/List";
import SubTitle from "../components/MealDetailsComponents/SubTitle";
import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const favoriteMealIds = useSelector((state) => state?.favoriteMeals?.ids);
  const dispatch = useDispatch();
  // const favoriteMealContext = useContext(FavoritesContext);
  // const { ids, addFavorite, removeFavorite } = favoriteMealContext;

  // const isThisAFavoriteMeal = ids?.includes(mealId);
  const isThisAFavoriteMeal = favoriteMealIds?.includes?.(mealId);
  // console.log("log", mealId);

  const onPressFavoritesIcon = () => {
    // console.log("Press");
    if (isThisAFavoriteMeal) {
      // removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={onPressFavoritesIcon}
          icon={isThisAFavoriteMeal ? "star" : "star-outline"}
          color="white"
        />
      ),
    });
  }, [navigation, onPressFavoritesIcon]);
  const {
    title,
    id,
    duration,
    affordability,
    ingredients,
    complexity,
    steps,
    imageUrl,
  } = MEALS?.filter((meal) => meal?.id === mealId)?.[0];

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  });
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        affordability={affordability}
        complexity={complexity}
        customTextStyle={{
          color: "white",
        }}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List listItems={ingredients} />
          <SubTitle>Steps</SubTitle>
          <List listItems={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

export default MealDetailsScreen;
