
import { API_STATE } from '../states/apiState'



export default function uiReducer(state = API_STATE, action: any) {
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
