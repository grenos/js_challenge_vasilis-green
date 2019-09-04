
import dotProp from 'dot-prop-immutable'
import { CART_STATE } from '../states/cartState'
import * as INT from '../../helpers/interfaces'


/**
 * cartReducer
 * handles mini bag actions - state
 * @function, cartReducer
 * @param {array} CART_STATE - State before reducer.
 * @param {object} action - action to be reduced.
 * @returns {array} cart array
 * @returns {number} - total amount (curreny)
 * @default CART_STATE
 */
export default function cartReducer(state = CART_STATE, action: any) {
  switch (action.type) {

    case 'ADD_TO_CART':
      let ItemInCart = state.cart.find((item: INT.ICartItem) => action.payload.uuid === item.uuid)

      if (ItemInCart) {
        // eslint-disable-next-line
        state.cart.map((item: INT.ICartItem) => {
          if (item.uuid === action.payload.uuid) {
            return {
              ...state,
              cart: [...state.cart, dotProp.set(action.payload, 'quantity', item.quantity++)],
            }
          }
        })

        return {
          ...state,
          total: state.total + ItemInCart.price
        }

      } else {
        return {
          ...state,
          cart: [...state.cart, dotProp.set(action.payload, 'quantity', action.quantity)],
          total: state.total + action.payload.price
        }
      }

    case 'REMOVE_FROM_CART':
      let priceToRemove = state.cart.find((item: INT.ICartItem) => action.uuid === item.uuid)

      return {
        ...state,
        cart: state.cart.filter((item: INT.ICartItem) => action.uuid !== item.uuid),
        total: state.total - (priceToRemove!.price * priceToRemove!.quantity)
      }


    case 'ADD_QUANTITY':
      let addQt = state.cart.find((item: INT.ICartItem) => action.uuid === item.uuid)

      // eslint-disable-next-line
      state.cart.map((item: INT.ICartItem) => {
        if (item.uuid === action.uuid) {
          return {
            ...state,
            cart: [...state.cart, dotProp.set(item, 'quantity', item.quantity++)],
          }
        }
      })

      return {
        ...state,
        total: state.total + addQt!.price
      }


    case 'REMOVE_QUANTITY':
      let selectedItem = state.cart.find((item: INT.ICartItem) => item.uuid === action.uuid)

      //remove item entirely if qt is 0
      if (selectedItem!.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((item: INT.ICartItem) => action.uuid !== item.uuid),
          total: state.total - selectedItem!.price
        }
      } else {
        // eslint-disable-next-line
        state.cart.map((item: INT.ICartItem) => {
          if (item.uuid === action.uuid) {
            return {
              ...state,
              cart: [...state.cart, dotProp.set(selectedItem!, 'quantity', selectedItem!.quantity--)],
            }
          }
        })

        return {
          ...state,
          total: state.total - selectedItem!.price
        }
      }


    // eslint-disable-next-line
    default: {
      return state
    }
  }
}


