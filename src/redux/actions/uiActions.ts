import * as INT from '../../helpers/interfaces'

export const addToFavorites = (id: string) => ({
  type: 'ADD_TO_FAVORITES',
  id
})

export const removeFromFavorites = (id: string) => ({
  type: 'REMOVE_FROM_FAVORITES',
  id
})


export const addToCart = (payload: INT.IAtcButtonProps) => ({
  type: 'ADD_TO_CART',
  payload,
  quantity: 1
})

export const removeFromCart = (uuid: number) => ({
  type: 'REMOVE_FROM_CART'
})

export const addQuantity = (uuid: number) => ({
  type: 'ADD_QUANTITY'
})

export const removeQuantity = (uuid: number) => ({
  type: 'REMOVE_QUANTITY'
})