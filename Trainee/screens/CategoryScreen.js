import React, { useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import { categoryRestaurant } from "../store/categoryStore";
import RestaurantCard from "../components/RestaurantCard";

export default function CategoryScreen({ navigation, route }) {
  const restaurant = useSelector((state) =>
    categoryRestaurant(state, route?.params?.id)
  );

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-row justify-center relative items-center border-b pt-5 pb-5 border-[#00CCBB] space-x-2">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute left-2 bg-gray-300 rounded-full p-2"
        >
          <ChevronLeftIcon color="#00CCBB" size={22} />
        </TouchableOpacity>
        <Text className="text-center capitalize text-bold text-lg ">
          {route?.params?.title}
        </Text>
      </View>
      <View className="flex-row flex-wrap justify-center items-center mt-4">
        {restaurant.map((item) => {
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
              className="w-1/12 "
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}
