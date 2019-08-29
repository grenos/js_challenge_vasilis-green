
import { UI_STATE } from '../states/uiState'

export default function paginateAllReducer(state = UI_STATE, action: any) {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.page
      }

    default: {
      return state
    }
  }
}
