import React from 'react'
import { StyleSheet, View, FlatList, Text, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { Post } from '../components/Post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { THEME } from '../theme'

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', { postId: post.id, date: post.date }) // Можем передавать объект с данными вторым аргументом
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: () => <Text style={styles.headerTitle}>Мой блог</Text>,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-camera'
        onPress={() => console.log('Take photo')}
      />
    </HeaderButtons>
  ),
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  headerTitle: {
    fontFamily: 'open-bold',
    fontSize: 22,
    color: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
})
