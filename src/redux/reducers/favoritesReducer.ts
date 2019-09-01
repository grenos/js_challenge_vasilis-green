
import { FAVORITES_STATE } from '../states/favoritesState'


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


