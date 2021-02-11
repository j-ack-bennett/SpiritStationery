export const NAVIGATE = 'NAVIGATE'
export const ADD_NAME = 'ADD_NAME'

import { addNames } from '../apis/office' 

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

export function saveWombat(name, item_id) {
  console.log('preparing the thunk (saveWombat)')
  return dispatch => {
    console.log('running the thunk (saveWombat)')
    addNames(name, item_id)
      .then(id => {
        console.log('saved wombat', id)
        return null
      })
  }
}
