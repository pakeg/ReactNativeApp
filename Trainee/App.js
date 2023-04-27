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
            />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
