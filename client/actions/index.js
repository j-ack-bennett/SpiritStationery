import { getMatches } from '../apis/office'
export const NAVIGATE = 'NAVIGATE'

export const SET_MATCHES = 'SET_MATCHES'

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

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
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
