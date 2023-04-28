import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPreparationScreen from "./screens/OrderPreparationScreen";
import CategoryScreen from "./screens/CategoryScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Restaurant"
              component={RestaurantScreen}
              options={() => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{
                headerShown: false,
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="OrderPreparation"
              component={OrderPreparationScreen}
              options={{
                headerShown: false,
                presentation: "fullScreenModal",
              }}
            />
            <Stack.Screen
              name="DeliveryScreen"
              component={DeliveryScreen}
              options={{
                headerShown: false,
                presentation: "fullScreenModal",
              }}
            />
            <Stack.Screen
              name="CategoryScreen"
              component={CategoryScreen}
              options={({ navigation }) => ({
                headerTitle: "Choose taste",
                headerRight: () => (
                  <TouchableOpacity onPress={navigation.goBack}>
                    <Text>Back</Text>
                  </TouchableOpacity>
                ),
                headerLeft: () => <Text>2</Text>,
                headerBackVisible: true,
              })}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
