import Ionicons from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { HapticTab } from "../components/HapticTab";
import BlurTabBarBackground from "../components/TabBarBackground";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#727272",
        tabBarActiveTintColor: "#ff00c3",
        tabBarBadgeStyle: { backgroundColor: "#000", color: "#fff" },
        tabBarButton: HapticTab,
        tabBarBackground: BlurTabBarBackground,
        // tabBarStyle: { width: 100 },
        tabBarPosition: "left",
        tabBarVariant: "material",
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="user" color={color} size={size} />
          ),
          tabBarBadge: 3,
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
