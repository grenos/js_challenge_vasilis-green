
import { UI_STATE } from '../states/uiState'



export default function uiReducer(state = UI_STATE, action: any) {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        test: action.test
      }

    default: {
      return state
    }
  }
}
