
import { PAGINATION_STATE } from '../states/paginationState'

export default function paginateAllReducer(state = PAGINATION_STATE, action: any) {
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
