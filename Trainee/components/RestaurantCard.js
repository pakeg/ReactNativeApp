import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";

const RestaurantCard = ({
  id,
  imgSrc,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-sm">
      <Image alt={title} source={imgSrc} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-6">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" size={22} opacity={0.5} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>
            {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RestaurantCard;
