import { NAVIGATE } from '../actions'

const initialState = {target: 'home'}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return {...state, target : action.target}
    default :
      return state
  }
}

export default reducer