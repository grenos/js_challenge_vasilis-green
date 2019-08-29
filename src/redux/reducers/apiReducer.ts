import { API_STATE } from '../states/apiState'

export default function apiReducer(state = API_STATE, action: any) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload
      }

    default: {
      return state
    }
  }
}
