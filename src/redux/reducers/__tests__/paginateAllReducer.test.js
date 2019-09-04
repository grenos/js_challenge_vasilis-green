import { storeFactory } from '../../../helpers/testUtils'
import { setCurrentPage } from '../../actions/paginateAllActions'


test('should pass data to api state', () => {
  let page = 1
  const initialState = {}
  const store = storeFactory(initialState)

  store.dispatch(setCurrentPage(page))
  const newState = store.getState().paginateAllReducer
  const expectedState = {
    ...initialState,
    currentPage: page
  }
  expect(newState).toEqual(expectedState)
})
