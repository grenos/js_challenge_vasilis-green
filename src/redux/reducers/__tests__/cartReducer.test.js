import { storeFactory } from '../../../helpers/testUtils'
import {
  addToCart,
  removeFromCart,
  addQuantity,
  removeQuantity
} from '../../actions/uiActions'


describe('cart reducer', () => {
  let item1 = {
    uuid: 'aaa',
    price: 100,
    quantity: 1
  }
  let item2 = {
    uuid: 'bbb',
    price: 200,
    quantity: 1
  }
  let initialState = {}
  let store

  beforeEach(() => {
    store = storeFactory(initialState)
    store.dispatch(addToCart(item1))
    store.dispatch(addToCart(item2))
  })


  test('should add item to cart', () => {
    const state = store.getState().cartReducer

    const expectedState = {
      ...initialState,
      cart: [item1, item2],
      total: 300
    }
    expect(state).toEqual(expectedState)
  })


  test('should remove item from cart', () => {
    store.dispatch(removeFromCart(item1.uuid))
    const state = store.getState().cartReducer

    const expectedState = {
      ...initialState,
      cart: [item2],
      total: 300 - (item1.price * item1.quantity)
    }

    expect(state).toEqual(expectedState)
  })


  test('should add qt', () => {
    store.dispatch(addQuantity(item1.uuid))
    const state = store.getState().cartReducer

    const expectedState = {
      ...initialState,
      cart: [{
        uuid: 'aaa',
        price: 100,
        quantity: 2
      },
      {
        uuid: 'bbb',
        price: 200,
        quantity: 1
      }
      ],
      total: 300 + item1.price
    }

    expect(state).toEqual(expectedState)
  })


  test('should subtract qt', () => {
    store.dispatch(removeQuantity(item1.uuid))
    const state = store.getState().cartReducer

    const expectedState = {
      ...initialState,
      cart: [item2],
      total: 300 - item1.price
    }

    expect(state).toEqual(expectedState)
  })

})

