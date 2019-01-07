import { combineReducers } from 'redux';

import photoReducer from './photo'
import errorReducer from './errors'
import loadingReducer from './loading'

const rootReducer = combineReducers({
  photosState: photoReducer,
  errorState: errorReducer,
  loadingState: loadingReducer
})

export default rootReducer