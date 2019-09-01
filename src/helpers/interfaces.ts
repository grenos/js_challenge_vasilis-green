export interface IAppProps {
  setData: Function
  isMiniBagToggle: boolean
}

export interface IHeaderProps {
  total: number
}

export interface IBagIconProps {
  cart: Array<ICartItem>
  toggleMiniBag: Function
}

export interface IFavIconProps {
  favorites: Array<string>
}

export interface IPaginationProps {

}

export interface IPaginateAllProps {
  currentPage: number
  setCurrentPage: Function
  data: any
}

export interface IPostsProps {
  currentPage: number
  data: any
  loading: boolean
}

export interface IData {
  cover_image_url: string
  title: string
  description: string
  retail_price: {
    currency: string
    formatted_value: string
    value: number
  }
  net_price: {
    currency: string
    formatted_value: string
    value: number
  }
  discount: number
  uuid: string
}

export interface IPostProps {
  cover_image_url: string
  title: string
  description: string
  retail_price: {
    currency: string
    formatted_value: string
    value: number
  }
  net_price: {
    currency: string
    formatted_value: string
    value: number
  }
  discount: number
  uuid: string
}

export interface IAtfProps {
  uuid: string
  addToFavorites: Function
  removeFromFavorites: Function
  favorites: string[]
}


export interface IAtcButtonProps {
  uuid: string
  title: string
  cover_image_url: string
  price: number
  addToCart: Function
  cart: Array<ICartItem>
}


export interface ICartItem {
  uuid: string
  title: string
  cover_image_url: string
  price: number
  quantity: number
}

export interface IBagModal {
  isMiniBagToggle: boolean
  toggleMiniBag: Function
}