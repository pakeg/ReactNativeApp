import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import * as Progress from "react-native-progress";
import { XMarkIcon } from "react-native-heroicons/solid";
// import MapView, { Marker } from "react-native-maps";

import { infoAboutRestaurantCart } from "../store/cartSlice";
import { useSelector } from "react-redux";

export default function DeliveryScreen({ navigation }) {
  const restaurantFromCart = useSelector(infoAboutRestaurantCart);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1">
      <View className="z-10">
        <View className="flex-row justify-between itmes-center p-4">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={22} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-20 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated arrival</Text>
              <Text className="text-4xl font-bold">20 Minutes</Text>
            </View>
            <Image
              source={require("../assets/delivery.gif")}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar color="#00CCBB" width={350} indeterminate={true} />
          <Text className="mt-3 text-gray-500">Food is coming to you</Text>
        </View>
      </View>

      <MapView
        initialRegion={{
          latitude: restaurantFromCart[0].lat,
          longtitude: restaurantFromCart[0].long,
          latitudeDelda: 0.005,
          longtitudeDelda: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        {restaurantFromCart.map((rest) => (
          <Marker
            coordinate={{
              latitude: rest.lat,
              longtitude: rest.long,
            }}
            title={rest.name}
            description={rest.shortDesc}
            identifier="origin"
            pinColor="#00CCBB"
          />
        ))}
      </MapView>

      <SafeAreaView className="flex-row bg-white items-center space-x-5 h-28">
        <Image
          alt="motocycle"
          source={require("../assets/motocycle.png")}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View>
          <Text className="text-lg">Driver</Text>
          <Text>your rider</Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
