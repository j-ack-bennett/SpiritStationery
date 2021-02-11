import { combineReducers } from 'redux'

import activePage from './activePage'
import officeStuff from './officeStuff'

export default combineReducers({
  activePage,
  officeStuff
})
