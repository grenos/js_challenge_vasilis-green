import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import apiReducer from './apiReducer'


export default combineReducers({
  uiReducer,
  apiReducer
})