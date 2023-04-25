import React from "react";
import { useSelector } from "react-redux";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import RestaurantCard from "../components/RestaurantCard";

const FeatureRow = ({ title, desc }) => {
  const store = useSelector((state) => state.storeSlice.restaurantStore);
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
        {store.map((item) => {
          return (
            <RestaurantCard
              key={item.id}
              id={item.id}
              imgSrc={require("../assets/restaurant/" + item.imgSrc)}
              title={item.name}
              rating={item.rating}
              category={item.category}
              address={item.address}
              short_desc={item.shortDesc}
              dishes={item.dishes}
              long={item.long}
              lat={item.lat}
            />
          );
        })}
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
