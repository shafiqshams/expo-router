import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Link href="/about">Go to about</Link>
      <Link href="/profile" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to profile</Text>
        </Pressable>
      </Link>
      <Link href="/products">Go to products</Link>
      <Link href="/login">Go to Login</Link>
      {/* <Link href="/missing-route">Missing route</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#0ea5e9",
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
