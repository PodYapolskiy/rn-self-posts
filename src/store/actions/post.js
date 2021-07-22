import * as FileSystem from 'expo-file-system'

import { DB } from '../../db'
import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from '../types'

export const loadPosts = () => {
  // Возвращаем ассинхронный колбэк
  return async dispatch => {
    // Внутри колбэка делаем ассинхронный запрос в базу данных
    const posts = await DB.getPosts()

    // Диспатчим готовые данные в приложение
    dispatch({
      type: LOAD_POSTS,
      payload: posts, // Данные, которые передаются
    })
  }
}

export const toggleBooked = id => {
  return {
    type: TOGGLE_BOOKED,
    payload: id,
  }
}

export const removePost = id => {
  return {
    type: REMOVE_POST,
    payload: id,
  }
}

export const addPost = post => async dispatch => {
  const fileName = post.img.split('/').pop() // Имя файла
  const newPath = FileSystem.documentDirectory + fileName

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img,
    })
  } catch (e) {
    console.log(`Error: ${e}`)
  }

  const payload = { ...post, img: newPath }
  const id = await DB.createPost(payload) // Ждём создание поста и присвоение ему уникального id

  payload.id = id

  dispatch({
    type: ADD_POST,
    payload: post,
  })
}
