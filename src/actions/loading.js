import {
  LOADING_SET,
} from '../constants/actionTypes'

const setLoading = payload => ({
  type: LOADING_SET,
  payload
})

export {
 setLoading
};