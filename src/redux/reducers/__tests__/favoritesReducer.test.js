import { storeFactory } from '../../../helpers/testUtils'
import {
  addToFavorites,
  removeFromFavorites
} from '../../actions/uiActions'


describe('favorites reducer', () => {
  let item = { uuid: 'aaa', }
  let initialState = {}
  let store

  beforeEach(() => {
    store = storeFactory(initialState)
    store.dispatch(addToFavorites(item))
  })

  test('should add item to favs', () => {
    const state = store.getState().favoritesReducer

    const expectedState = {
      ...initialState,
      favorites: [item]
    }
    expect(state).toEqual(expectedState)
  })

  test('should remove item from favs', () => {
    store.dispatch(removeFromFavorites(item))
    const state = store.getState().favoritesReducer

    const expectedState = {
      ...initialState,
      favorites: []
    }
    expect(state).toEqual(expectedState)
  })
})