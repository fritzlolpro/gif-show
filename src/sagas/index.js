import { takeEvery, all } from 'redux-saga/effects';
import { PHOTO_FETCH } from '../constants/actionTypes';
import { handleFetchPhoto } from './photo';

function *watchAll() {
  yield all( [
    takeEvery( PHOTO_FETCH, handleFetchPhoto )
  ] )
}

export default watchAll;