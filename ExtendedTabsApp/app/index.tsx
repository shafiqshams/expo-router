import { Link } from "expo-router";
import { Button, Image, ScrollView, Text, View } from "react-native";

export default function Home() {

  return (
    <ScrollView >
      <Link href="/profile" style={{ padding: 10 }} asChild>
        <Button title="Profile" />
      </Link>

      {[...Array(20)].map((_, i) => (
        <View
          key={`item-${i}`}
          style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={require("../assets/images/react-logo.png")}
            style={{ width: 32, height: 32, marginRight: 16 }}
          />

          <Text>Dummy Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
