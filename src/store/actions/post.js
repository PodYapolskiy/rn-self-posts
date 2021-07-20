import { DATA } from '../../data'
import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from '../types'

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA, // Данные, которые передаются
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
