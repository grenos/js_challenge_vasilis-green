import { API_STATE } from '../states/apiState'

/**
 * apiReducer
 * takes api call returned array
 * @function, secretWordsReducer
 * @param {array} API_STATE - State before reducer.
 * @param {object} action - action to be reduced.
 * @returns {array} - new state data array
 * @default API_STATE
 */
export default function apiReducer(state = API_STATE, action: any) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload
      }

    default: {
      return state
    }
  }
}
