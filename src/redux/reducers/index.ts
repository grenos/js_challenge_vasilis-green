import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducer'
import apiReducer from './apiReducer'
import paginateAllReducer from './paginateAllReducer'
import cartReducer from './cartReducer'


export default combineReducers({
  favoritesReducer,
  cartReducer,
  apiReducer,
  paginateAllReducer
})