import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#6a51ae" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <Pressable
              onPress={() => {
                alert("Menu is pressed");
              }}
            >
              <Text style={{ color: "white", marginRight: 10 }}>Menu</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
        }}
      />
    </Stack>
  );
}
