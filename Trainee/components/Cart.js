import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const Cart = ({ count, summ }) => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-10 w-full z-2">
      <TouchableOpacity
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg 
      flex-row items-center space-x-1"
        onPress={() => navigation.navigate("Cart")}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {count}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View your order
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(summ)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cart;
