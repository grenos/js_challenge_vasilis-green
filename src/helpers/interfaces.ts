export interface IAppProps {
  setData: Function
}

export interface IHeaderProps {

}

export interface IBagIconProps {

}

export interface IFavIconProps {

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
  price: {
    currency: string
    formatted_value: string
    value: number
  }
  discount: number
}