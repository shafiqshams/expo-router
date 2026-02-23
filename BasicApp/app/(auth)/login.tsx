import { Link, router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Link href="./register">Create account</Link>
      <Button title="Login" onPress={() => router.replace("/profile")} />
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
