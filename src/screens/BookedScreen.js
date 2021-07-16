import React from 'react'
import { StyleSheet, View, FlatList, Text, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { Post } from '../components/Post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
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

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA.filter(post => post.booked)}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  )
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
  wrapper: {
    padding: 10,
  },
  headerTitle: {
    fontFamily: 'open-bold',
    fontSize: 22,
    color: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
})
