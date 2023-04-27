import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";

import { useSelector } from "react-redux";
import { infoAboutCart } from "../store/cartSlice";

import DishRow from "../components/DishRow";
import Cart from "../components/Cart";

export default function RestaurantScreen({ route: { params }, navigation }) {
  const { summ, count } = useSelector(infoAboutCart);
  return (
    <>
      <ScrollView>
        <View className="relative">
          <Image
            alt={params.title}
            source={params.imgSrc}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{params.title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{params.rating}</Text>{" "}
                  {params.category.map(
                    (item, idx) =>
                      item.name +
                      (params.category.length - 1 == idx ? "" : " / ")
                  )}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby {params.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{params.short_desc}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="flex-1 pl-2 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className={`${count && "mb-36"}`}>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {params.dishes.map((dish) => {
            return (
              <DishRow
                key={dish.id}
                id={dish.id}
                title={dish.name}
                desc={dish.desc}
                imgSrc={dish.imgSrc}
                price={dish.price}
                restaurant={params.title}
              ></DishRow>
            );
          })}
        </View>
      </ScrollView>

      {count > 0 ? <Cart summ={summ} count={count} /> : ""}
    </>
  );
}
