import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "../MealDetails";

const MealItem = ({ item }) => {
  const { imageUrl, title, duration, complexity, affordability, id } = item;
  const navigation = useNavigation();

  const onPressMealItem = () => {
    console.log("itemData", item);
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onPressMealItem}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: imageUrl,
              }}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
