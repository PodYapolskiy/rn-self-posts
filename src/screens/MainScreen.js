import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { DATA } from '../data'

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      // Можем передавать объект с данными вторым аргументом
      postId: post.id,
      date: post.date,
      booked: post.booked, // Передаём сразу же, чтобы избежать то, что будет при useEffect()
    })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Toggle Drawer'
            iconName='ios-menu'
            onPress={() => console.log('Toggle Drawer')}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Take photo'
            iconName='ios-camera'
            onPress={() => console.log('Take photo')}
          />
        </HeaderButtons>
      ),
    })
  })

  return <PostList data={DATA} onOpen={openPostHandler} />
}
