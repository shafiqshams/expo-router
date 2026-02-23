import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>

      <Link href="./1" relativeToDirectory>
        Product 1
      </Link>

      <Link href="./2">Product 2</Link>
      <Link href="./3">Product 3</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
