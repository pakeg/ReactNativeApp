import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useDispatch } from "react-redux";

import { removeFromCard } from "../store/cartSlice";

export default function CartOrderItem({
  id,
  title,
  imgSrc,
  count,
  price,
  summ,
  restaurant,
}) {
  const dispatch = useDispatch();
  return (
    <View className="flex-row items-center space-x-3 py-2 px-5">
      <Text className="text-[#00CCBB]">{count} x</Text>
      <Image
        source={require("../assets/dishes/" + imgSrc)}
        className="h-12 w-12 rounded-full"
      />
      <Text className="flex-1">{title}</Text>
      <Text className="text-gray-400 text-xs">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </Text>
      <Text className="text-gray-700">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(summ)}
      </Text>
      <TouchableOpacity
        onPress={() => dispatch(removeFromCard({ id, restaurant }))}
      >
        <Text className="text-red-500 text-xs">Remove</Text>
      </TouchableOpacity>
    </View>
  );
}
