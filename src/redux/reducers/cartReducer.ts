
import dotProp from 'dot-prop-immutable'
import { CART_STATE } from '../states/cartState'

interface IItem {
  uuid: string
  title: string
  cover_image_url: string
  price: number
  quantity: number
}

export default function cartReducer(state = CART_STATE, action: any) {
  switch (action.type) {

    case 'ADD_TO_CART':
      let ItemInCart = state.cart.find((item: IItem) => action.payload.uuid === item.uuid)

      if (ItemInCart) {
        // eslint-disable-next-line
        state.cart.map((item: IItem) => {
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


    // eslint-disable-next-line
    default: {
      return state
    }
  }
}


