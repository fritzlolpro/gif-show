import {
  ERRORS_SET,
} from '../constants/actionTypes'

function errorReducer(state = null, action) {
  switch(action.type) {
    case ERRORS_SET: {
      return state = action.error
    }
    default: return state
  }
}

export default errorReducer