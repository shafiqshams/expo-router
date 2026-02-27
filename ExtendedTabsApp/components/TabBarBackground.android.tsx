import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet, useColorScheme } from "react-native";

export default function BlurTabBarBackground() {
  const colorScheme = useColorScheme();

  return (
    <BlurView
      // "light" or "dark" works best on Android as a default
      tint={colorScheme === "dark" ? "dark" : "light"}
      intensity={80}
      style={StyleSheet.absoluteFill}
    />
  );
}


export function useBottomTabOverflow() {
  return useBottomTabBarHeight();
}
