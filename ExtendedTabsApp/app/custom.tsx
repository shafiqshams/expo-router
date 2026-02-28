import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Custom() {
  return (
    <View style={styles.container}>
      <Text>Custom</Text>
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