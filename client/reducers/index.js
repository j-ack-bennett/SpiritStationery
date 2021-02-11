import { combineReducers } from 'redux'

import fruits from './fruits'
import activePage from './activePage'

export default combineReducers({
  fruits,
  activePage
})
