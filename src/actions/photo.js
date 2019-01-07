import {
  PHOTO_FETCH,
  PHOTO_ADD
} from '../constants/actionTypes'

const fetchPhoto = () => ({
  type: PHOTO_FETCH
})

const addPhoto = photo => ({
  type: PHOTO_ADD,
  photo
})

export {
  fetchPhoto,
  addPhoto,
};