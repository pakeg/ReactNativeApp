import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import CategoryCard from "../components/CategoryCard";

export default function Categories() {
  const store = useSelector((state) => state.storeSlice);
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {store.categoryStore.map((item) => (
        <CategoryCard
          key={item.id}
          imgSrc={require("../assets/category/" + item.imgSrc)}
          title={item.name}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
