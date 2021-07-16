import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { THEME } from '../theme'
import { PostList } from '../components/PostList'

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      // Можем передавать объект с данными вторым аргументом
      postId: post.id,
      date: post.date,
      booked: post.booked, // Передаём сразу же, чтобы избежать то, что будет при useEffect()
    })
  }

  return <PostList data={DATA} onOpen={openPostHandler} />
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
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => console.log('Toggle Drawer')}
      />
    </HeaderButtons>
  ),
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'open-bold',
    fontSize: 22,
    color: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
})
