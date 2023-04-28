import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image } from "react-native";

export default function CategoryCard({ imgSrc, title }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="relative mr-2"
      onPress={() => navigation.navigate("CategoryScreen")}
    >
      <Image alt="motorcycle" source={imgSrc} className="h-20 w-20 rounded" />
      <Text className="absolute left-1 bottom-1 text-[#00CCBB] font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
