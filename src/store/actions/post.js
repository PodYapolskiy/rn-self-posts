import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from '../types'

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: [], // Данные, которые передаются
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
