import React, { useState } from 'react'
import { StyleSheet, View, Image, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'

const askForPermissions = async () => {
  // https://docs.expo.io/versions/v39.0.0/sdk/permissions/#permissionresponse
  const { granted } = await MediaLibrary.requestPermissionsAsync()
  // Вроде бы только для IOS
  // const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync()

  console.log(`Granted: ${granted}`)
  if (granted) {
    return true
  } else {
    Alert.alert('Ошибка', 'Вы не дали прав на создание фото.')
    return false
  }
}

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null)

  const takePhoto = async () => {
    const hasPermission = await askForPermissions()

    if (!hasPermission) {
      return
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7, // Качество
      allowsEditing: false, // возможность редактировать
      aspect: [16, 9], // Соотношение сторон фото
    })

    console.log(img)
    setImage(img.uri)
    onPick(img.uri) // Каждый раз при выборе будет создаваться новая ссылка
  }

  return (
    <View style={styles.wrapper}>
      <Button title='Сделать фото' onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
})
