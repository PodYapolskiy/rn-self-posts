import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const CreateScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>CreateScreen</Text>
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
