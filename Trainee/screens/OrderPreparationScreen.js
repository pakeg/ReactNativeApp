import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
export default function OrderPreparationScreen({ navigation }) {
  const [progress, setProgress] = useState(0.0);
  const random = Math.floor(Math.random() * (1000 - 250 + 1)) + 250;
  const timer = useRef(null);
  useEffect(() => {
    if (progress < 1) {
      timer.current = setTimeout(() => setProgress(progress + 0.1), random);
    } else {
      navigation.navigate("DeliveryScreen");
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, [progress]);
  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        animation="slideInDown"
        source={require("../assets/deliveroodribbbble.gif")}
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInDown"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Accepting your order...
      </Animatable.Text>

      <Progress.Bar
        borderColor="#9ceae4"
        color="#9ceae4"
        progress={progress}
        width={200}
      />
    </SafeAreaView>
  );
}
