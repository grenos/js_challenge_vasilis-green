import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducer'
import apiReducer from './apiReducer'
import paginateAllReducer from './paginateAllReducer'
import cartReducer from './cartReducer'
import uiReducer from './uiReducer'


export default combineReducers({
  favoritesReducer,
  cartReducer,
  apiReducer,
  paginateAllReducer,
  uiReducer
})