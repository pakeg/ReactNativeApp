import React from "react";
import { useSelector } from "react-redux";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import RestaurantCard from "../components/RestaurantCard";

const FeatureRow = ({ title, desc, id }) => {
  const store = useSelector((state) => state.storeSlice);
  console.log(store);
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{desc}</Text>

      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id="1"
          imgSrc={require("../assets/sushi-place.jpg")}
          title="Shushi"
          rating={4.5}
          genre="Japanese"
          address="st. 2434 Long Drives"
          short_desc="best shushi"
          dishes={[]}
          long={20}
          lat={24}
        />
        <RestaurantCard
          id="1"
          imgSrc={require("../assets/sushi-place.jpg")}
          title="Shushi"
          rating={4.5}
          genre="Japanese"
          address="st. 2434 Long Drives"
          short_desc="best shushi"
          dishes={[]}
          long={20}
          lat={24}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
export default FeatureRow;
