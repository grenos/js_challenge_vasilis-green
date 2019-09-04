
import { FAVORITES_STATE } from '../states/favoritesState'


/**
 * favoritesReducer
 * adds favorited item uuid in favos array
 * @function, favoritesReducer
 * @param {array} FAVORITES_STATE - State before reducer.
 * @param {object} action - action to be reduced.
 * @returns {array} favorites array
 * @default FAVORITES_STATE
 */

export default function favoritesReducer(state = FAVORITES_STATE, action: any) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.id]
      }
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter((id: string) => action.id !== id)
      }

    default: {
      return state
    }
  }
}


