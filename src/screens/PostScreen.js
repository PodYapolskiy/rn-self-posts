import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  Alert,
} from 'react-native'
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
  return {
    headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`,
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
})
