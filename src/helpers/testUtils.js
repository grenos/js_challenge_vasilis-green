import { createStore } from 'redux'
import rootReducer from '../redux/reducers/index'


/**
 * Create a testing Store with imported reducers and fake initial state.
 * globals: rootReducer
 * @param {object} initialState - initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState)
}



/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {shallowWrapper} wrapper - Enzyme shallowWrapper to search within
 * @param {string} val - Value of data-test attribue for search.
 * @returns {shallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
