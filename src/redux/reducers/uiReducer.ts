
import { UI_STATE } from '../states/uiState'


export default function uiReducer(state = UI_STATE, action: any) {
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


