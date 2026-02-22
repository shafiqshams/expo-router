import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomNotFound() {
  return (
    <View style={styles.container}>
      <Text>Missing route, not found</Text>
      <Link href="/">Go to Home page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
