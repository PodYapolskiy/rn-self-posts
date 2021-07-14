import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import { Post } from '../components/Post'
import { DATA } from '../data'

export const MainScreen = ({}) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'Мой блог',
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
})
