import { getFruits } from '../apis/fruits'
export const NAVIGATE = 'NAVIGATE'

export const SET_FRUITS = 'SET_FRUITS'

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function navigate (target) {
  return {
    type: NAVIGATE,
    target: target // 'listing' or 'cart'
  }
}









export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}
