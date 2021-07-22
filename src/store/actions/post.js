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

export const addPost = post => {
  post.id = Date.now().toString()

  return {
    type: ADD_POST,
    payload: post,
  }
}
