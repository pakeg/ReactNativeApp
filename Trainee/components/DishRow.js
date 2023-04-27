import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View, Button } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

import { useDispatch } from "react-redux";
import { addToCard } from "../store/cartSlice";

export default function DishRow({
  id,
  title,
  desc,
  imgSrc,
  price,
  restaurant,
}) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1  pr-2">
            <Text className="text-lg mb-1">{title}</Text>
            <Text className="text-gray-400">{desc}</Text>
            <Text className="text-gray-400 mt-2">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(price)}
            </Text>
          </View>

          <View>
            <Image
              source={require("../assets/dishes/" + imgSrc)}
              className="h-20 w-20 bg-gray-300 p-4 border border-[#F3F3F4]"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center pb-3">
            <View className="flex-row items-center flex-1 space-x-2">
              <TouchableOpacity
                activeOpacity={0.1}
                onPress={() => setCount((state) => state - 1)}
                disabled={!count}
              >
                <MinusCircleIcon
                  color={`${count ? "#00CCBB" : "gray"}`}
                  size={40}
                />
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity onPress={() => setCount((state) => state + 1)}>
                <PlusCircleIcon color="#00CCBB" size={40} />
              </TouchableOpacity>
            </View>
            {count > 0 && (
              <Button
                title="add to cart"
                color="#00CCBB"
                onPress={() => {
                  dispatch(
                    addToCard({
                      id,
                      title,
                      desc,
                      imgSrc,
                      price,
                      count,
                      restaurant,
                    })
                  );
                  setCount(0);
                  setIsPressed(!isPressed);
                }}
              />
            )}
          </View>
        </View>
      )}
    </React.Fragment>
  );
}
