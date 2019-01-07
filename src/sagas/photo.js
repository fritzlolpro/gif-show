import {call, put} from 'redux-saga/effects'
import {addPhoto} from '../actions/photo';
import {setLoading} from '../actions/loading';
import {setError} from '../actions/error';

const apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA&ta' +
    'g=&rating=G'


function* handleFetchPhoto() {
  yield put(setLoading(true))
  try {
    const response = yield fetch(apiUrl)
    if (response.status >= 200 && response.status < 300) {
      const photo = yield response.json()
      yield put(addPhoto(photo.data))
    } else {
      throw response
    }
  } catch(error) {
    yield put(setError(error.toString()))
  } finally {
    yield put(setLoading(false))
  }
}

export {
  handleFetchPhoto
}