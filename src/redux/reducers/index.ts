import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import apiReducer from './apiReducer'
import paginateAllReducer from './paginateAllReducer'


export default combineReducers({
  uiReducer,
  apiReducer,
  paginateAllReducer
})