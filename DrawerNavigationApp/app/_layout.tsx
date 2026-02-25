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
          }}
        />
        <Drawer.Screen
          name="dashboard"
          options={{
            title: "Dashboard",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
