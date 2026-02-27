import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  if (Platform.OS === "web") {
    return (
      <div style={{ display: "flex", gap: 20, padding: 20 }}>
        <h1>Web Layout</h1>
        <nav style={{ display: "flex", gap: 20 }}>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    );
  }

  return <Tabs />;
}
