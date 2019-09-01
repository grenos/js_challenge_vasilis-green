
import { UI_STATE } from '../states/uiState'

export default function paginateAllReducer(state = UI_STATE, action: any) {
  switch (action.type) {
    case 'TOGGLE_MINI_BAG':
      return {
        ...state,
        isMiniBagToggle: !state.isMiniBagToggle
      }

    default: {
      return state
    }
  }
}
