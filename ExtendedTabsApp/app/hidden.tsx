import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Hidden() {
  return (
    <View style={styles.container}>
      <Text>Hidden</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },  
})