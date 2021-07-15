import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')

  return (
    <View style={styles.center}>
      <Text>{postId}</Text>
    </View>
  )
}

PostScreen.navigationOptions = ({ navigation }) => {
  // Динамическое изменение
  const date = navigation.getParam('date')
  return {
    headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`,
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
