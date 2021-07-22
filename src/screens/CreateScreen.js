import React, { useLayoutEffect, useState, useRef } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { addPost } from '../store/actions/post'
import { PhotoPicker } from '../components/PhotoPicker'
import { THEME } from '../theme'

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const imgRef = useRef() // При изменении не будет ререндериться компонент

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: imgRef.current,
      booked: false,
    }
    dispatch(addPost(post))
    navigation.navigate('Main')
  }

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
  }, []) // Нет зависимостей, поэтому сработает только при рендере компонента

  const photoPickHandler = uri => {
    imgRef.current = uri
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            style={styles.textArea}
            placeholder='Введите текст'
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler} />
          {/* <Image
            style={{ width: '100%', height: 200, marginBottom: 10 }}
            source={{
              uri: 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
            }}
          /> */}
          <Button
            title='Создать пост'
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text} // Будет заблокирована, если что-то не заполнено
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-bold',
    marginVertical: 10,
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
  },
})
