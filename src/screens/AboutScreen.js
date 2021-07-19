import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>AboutScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
