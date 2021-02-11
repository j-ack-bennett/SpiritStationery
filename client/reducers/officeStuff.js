import { SET_MATCHES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES:
      return action.matches
    default:
      return state
  }
}

export default reducer
