import {
  ERRORS_SET
} from '../constants/actionTypes'


const setError = error => ({
  type: ERRORS_SET,
  error
})

export { setError }