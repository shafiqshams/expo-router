import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';

const SpecialTabButton = () => {
  const handlePress = () => {
    Alert.alert("SpecialTabButton")
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button} activeOpacity={0.7} >
      <Ionicons name="add-circle" size={24} color="#fff" />
    </TouchableOpacity>
  )
}

export default SpecialTabButton

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: '50%',
    top: -20,
    transform: [{ translateX: -40 }],
    backgroundColor: "#4F46E5",
    borderRadius: 24,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  }
})