import { storeFactory } from '../../../helpers/testUtils'
import { setData } from '../../actions/apiActions'




test('should pass data to api state', () => {
  const initialState = {}
  const store = storeFactory(initialState)

  store.dispatch(setData([{ data1: '111', data2: '222' }]))
  const newState = store.getState().apiReducer
  const expectedState = {
    ...initialState,
    data: [{ data1: '111', data2: '222' }]
  }
  expect(newState).toEqual(expectedState)
})
