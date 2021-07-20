import { DATA } from '../../data'
import { LOAD_POSTS, TOGGLE_BOOKED } from '../types'

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
