import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AboutAndroid() {
  return (
    <View style={styles.container}>
      <Text>Android about screen</Text>
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
