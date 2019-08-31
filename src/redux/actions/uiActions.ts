export const addToFavorites = (id: string) => ({
  type: 'ADD_TO_FAVORITES',
  id
})

export const removeFromFavorites = (id: string) => ({
  type: 'REMOVE_FROM_FAVORITES',
  id
})
