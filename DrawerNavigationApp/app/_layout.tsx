import { FontAwesome } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerIcon: ({ color }) => (
              <FontAwesome name="home" color={color} size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="dashboard"
          options={{
            title: "Dashboard",
            drawerIcon: ({ color }) => (
              <FontAwesome name="dashboard" color={color} size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerIcon: ({ color }) => (
              <FontAwesome name="gear" color={color} size={24} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
