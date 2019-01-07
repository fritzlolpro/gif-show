import {
  LOADING_SET,
} from '../constants/actionTypes'


function loadingReducer(state = false, action) {
  switch(action.type) {
    case LOADING_SET: {
      return state = action.payload
    }
    default: return state
  }
}

export default loadingReducer