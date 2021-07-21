import React, { useState } from 'react'
import { StyleSheet, View, Image, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'

const askForPermissions = async () => {
  await MediaLibrary.requestPermissionsAsync()
  // https://docs.expo.io/versions/v39.0.0/sdk/permissions/#permissionresponse
  const { granted } = await MediaLibrary.getPermissionsAsync()
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

export const PhotoPicker = () => {
  const [image, setImage] = useState(null)

  const takePhoto = async () => {
    const hasPermission = await askForPermissions()

    if (!hasPermission) {
      console.log('Всё не заебок')
      return
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7, // Качество
      allowsEditing: false, // возможность редактировать
      aspect: [16, 9], // Соотношение сторон фото
    })

    console.log(img)
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
