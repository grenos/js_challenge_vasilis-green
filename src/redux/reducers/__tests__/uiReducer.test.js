import { storeFactory } from '../../../helpers/testUtils'
import { toggleMiniBag } from '../../actions/uiActions'


test('should pass data to api state', () => {
  const initialState = {}
  const store = storeFactory(initialState)

  store.dispatch(toggleMiniBag())
  const newState = store.getState().uiReducer
  const expectedState = {
    ...initialState,
    isMiniBagToggle: true
  }
  expect(newState).toEqual(expectedState)
})
