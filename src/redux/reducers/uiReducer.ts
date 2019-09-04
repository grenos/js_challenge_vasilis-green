
import { UI_STATE } from '../states/uiState'

/**
 * uiReducer
 * handles UI interactions
 * @function, uiReducer
 * @param {array} UI_STATE - State before reducer.
 * @param {object} action - action to be reduced.
 * @returns {boolean} isMiniBagToggle 
 * @default UI_STATE
 */
export default function uiReducer(state = UI_STATE, action: any) {
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
