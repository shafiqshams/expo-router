import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
      {/* If we want to navigate to product details, we can set href to ./1 */}
      {/* This is because we are already in products directory. */}
      {/* and relative URLs will be resolved to the directory we are currently in */}
      {/* IMP: However, if the file is index.tsx, 
      relative URL is resolved from the URLs directory.*/}
      {/* and the href ./1 wont work */}

      {/* To fix this issue, we use relativeToDirectory prop */}
      <Link href="./1" relativeToDirectory>
        Product 1
      </Link>

      {/* But, if the file is not index.tsx, 
      and products.tsx then we can omit relativeToDirectory prop */}
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
