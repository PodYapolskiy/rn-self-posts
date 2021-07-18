import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { DATA } from '../data'

export const BookedScreen = ({ navigation }) => {
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
    })
  })

  const data = DATA.filter(post => post.booked)

  return <PostList data={data} onOpen={openPostHandler} />
}
