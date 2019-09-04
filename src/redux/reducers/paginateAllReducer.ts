
import { PAGINATION_STATE } from '../states/paginationState'

/**
 * paginateAllReducer
 * sets active page
 * @function, paginateAllReducer
 * @param {array} PAGINATION_STATE - State before reducer.
 * @param {object} action - action to be reduced.
 * @returns {number} currentPage number
 * @default PAGINATION_STATE
 */
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
