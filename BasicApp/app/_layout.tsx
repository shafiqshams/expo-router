import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "white" }}>Header</Text>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={{ color: "white" }}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "red",
    padding: 20,
  },
  footer: {
    backgroundColor: "blue",
    padding: 20,
  },
});
