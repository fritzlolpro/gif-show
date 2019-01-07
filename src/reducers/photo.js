import {
  PHOTO_ADD,
} from '../constants/actionTypes'

const initState = []

function photoReducer(state = initState, action) {
  switch(action.type) {
    case PHOTO_ADD: {
      return [...state, action.photo]
    }
    default: return state
  }
}

export default photoReducer