import React, { useEffect, useLayoutEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  Alert,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { toggleBooked } from '../store/actions/post'
import { THEME } from '../theme'

export const PostScreen = ({ navigation, route }) => {
  const { postId, date } = route.params
  const post = DATA.find(p => p.id === postId) // Ищем нужный пост

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хоите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'destructive',
        },
      ],
      { cancelable: false } // Нельзя выйти из окна, нажав вне него
    )
  }

  // Определяем значение booked
  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  )

  const iconName = booked ? 'ios-star' : 'ios-star-outline'
  useEffect(() => {
    navigation.setOptions({ iconName }) // Устанавливаем новое значение iconName при изменении booked
  }, [booked]) // Зависит только от booked

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Take'
            iconName={iconName}
            onPress={() => {
              console.log(postId)
              dispatch(toggleBooked(postId))
            }}
          />
        </HeaderButtons>
      ),
    })
  }, [booked]) // Также зависит только от booked и будет применяться при изменении этой переменной

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title='Удалить'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
  },
})
