import { ADD_NAME } from '../actions'
import { SET_MATCHES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return [...state, {name: action.name, item_id: action.item_id}]
    case SET_MATCHES:
      return action.matches
    default:
      return state
  }
}

export default reducer
