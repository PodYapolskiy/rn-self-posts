import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { DATA } from '../data'
import { THEME } from '../theme'

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      // Можем передавать объект с данными вторым аргументом
      postId: post.id,
      date: post.date,
      booked: post.booked, // Передаём сразу же, чтобы избежать то, что будет при useEffect()
    })
  }

  const data = DATA.filter(post => post.booked)

  return <PostList data={data} onOpen={openPostHandler} />
}

BookedScreen.navigationOptions = () => {
  return {
    headerTitle: () => <Text style={styles.headerTitle}>Избранное</Text>,
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
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'open-bold',
    fontSize: 22,
    color: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
})
