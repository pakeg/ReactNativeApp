import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import CategoryCard from "../components/CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgSrc={require("../assets/sushi-place.jpg")}
        title="Category"
      />
      <CategoryCard
        imgSrc={require("../assets/sushi-place.jpg")}
        title="Category"
      />
      <CategoryCard
        imgSrc={require("../assets/sushi-place.jpg")}
        title="Category"
      />
      <CategoryCard
        imgSrc={require("../assets/sushi-place.jpg")}
        title="Category"
      />
      <CategoryCard
        imgSrc={require("../assets/sushi-place.jpg")}
        title="Category"
      />
      <CategoryCard
        imgSrc={require("../assets/sushi-place.jpg")}
        title="Category"
      />
      <CategoryCard
        imgSrc={require("../assets/sushi-place.jpg")}
        title="Category"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
