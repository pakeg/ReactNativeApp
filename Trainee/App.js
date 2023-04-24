import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
