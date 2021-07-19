import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      // Можем передавать объект с данными вторым аргументом
      postId: post.id,
      date: post.date,
      booked: post.booked, // Передаём сразу же, чтобы избежать то, что будет при useEffect()
    })
  }

  const bookedPosts = useSelector(state => state.post.bookedPosts)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Toggle Drawer'
            iconName='ios-menu'
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    })
  })

  return <PostList data={bookedPosts} onOpen={openPostHandler} />
}
