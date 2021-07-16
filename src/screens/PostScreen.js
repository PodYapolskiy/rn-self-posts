import React, { useEffect } from 'react'
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

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId') // Достаём переданную информацию
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

PostScreen.navigationOptions = ({ navigation }) => {
  // Динамическое изменение
  const date = navigation.getParam('date')
  const booked = navigation.getParam('booked')
  const iconName = booked ? 'ios-star' : 'ios-star-outline'

  return {
    // headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`,
    headerTitle: () => (
      <Text style={styles.headerTitle}>
        Пост от {new Date(date).toLocaleDateString()}
      </Text>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Take'
          iconName={iconName}
          onPress={() => console.log('Take')}
        />
      </HeaderButtons>
    ),
  }
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
  headerTitle: {
    fontFamily: 'open-bold',
    fontSize: 20,
    color: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
})
