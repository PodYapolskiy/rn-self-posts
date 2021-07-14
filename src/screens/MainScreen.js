import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const MainScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'Мой блог',
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
