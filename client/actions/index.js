import { getMatches } from '../apis/office'
export const NAVIGATE = 'NAVIGATE'
export const ADD_NAME = 'ADD_NAME'

export const SET_MATCHES = 'SET_MATCHES'
import { addNames } from '../apis/office' 

export function setMatches (matches) {
  // console.log(matches)
  return {
    type: SET_MATCHES,
    matches: matches
  }
}

export function navigate (target) {
  return {
    type: NAVIGATE,
    target: target // 'listing' or 'cart'
  }
}

export function addName (name, item_id) {
  return {
    type: ADD_NAME,
    name: name,
    item_id: item_id
  }
}

// export function saveName (name, item_id) {
//   return dispatch => {
//     addNames(name, item_id)
//       .then(() => {
//         dispatch(addName(name, item_id))
//       })
//   }
// }

// export function fetchNameAndItem () {
//   return dispatch => {
//     return getFruits()
//       .then(fruits => {
//         dispatch(setFruits(fruits))
//         return null
//       })
//   }
// }

export function saveName (name, item_id) {
  return dispatch => {
    addNames(name, item_id)
      .then(blah => {
        dispatch(fetchMatches())
        // return null
      })
  }
}

export function fetchMatches (){
  return dispatch => {
    getMatches()
       .then(matches => {
        dispatch(setMatches(matches))
        return null
      })
  }
}
