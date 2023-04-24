import React, { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";

import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";

export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          alt="motocycle"
          source={require("../assets/motocycle.png")}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon color="#00CCBB" size={35} />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 px-4 mx-4">
        <View className="flex-row flex-1 space-x-2 p-3 bg-gray-200">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="search a restaurant"
            keyboardType="default"
            className="opacity-50 flex-1 "
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      <Categories />

      <FeatureRow title="feature-1" desc="Our feature-1" id="3" />
      <FeatureRow title="feature-2" desc="Our feature-2" id="2" />
      <FeatureRow title="feature-2" desc="Our feature-2" id="1" />
    </SafeAreaView>
  );
}
