import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import { XCircleIcon } from "react-native-heroicons/solid";

import CartOrderItem from "../components/CartOrderItem";

import { useSelector } from "react-redux";
import { infoAboutCart } from "../store/cartSlice";
const fee = 5;

export default function CartScreen({ navigation }) {
  const { summ, count, orderGroupByRest } = useSelector(infoAboutCart);

  useEffect(() => {
    if (count == 0) navigation.navigate("Home");
  }, [count]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="flex-row text-center justify-center p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View className="flex-1 text-center justify-center">
            <Text className="text-lg font-bold text-center">Cart</Text>
          </View>

          <TouchableOpacity
            className="bg-gray-100 rounded-full"
            onPress={navigation.goBack}
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={require("../assets/motocycle.png")}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in ...</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-x divide-gray">
          {Object.entries(orderGroupByRest).map((items) => {
            return (
              <View key={uuidv4()} className="bg-white">
                <Text className="font-bold pl-2 pt-2">{items[0]}:</Text>
                {items[1].map((item) => (
                  <CartOrderItem
                    key={uuidv4()}
                    id={item.id}
                    title={item.title}
                    imgSrc={item.imgSrc}
                    count={item.count}
                    price={item.price}
                    summ={item.price * item.count}
                    restaurant={items[0]}
                  />
                ))}
              </View>
            );
          })}
        </ScrollView>

        <View className="p-5 bg-white mt-4 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(fee)}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(summ)}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order total</Text>
            <Text className="font-extrabold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(summ + fee)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPreparation")}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
