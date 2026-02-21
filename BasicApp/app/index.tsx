import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Home page</Text>
      <Link href="/about">Go to about</Link>
      <Link href="./profile">Go to profile</Link>
    </View>
  );
}
