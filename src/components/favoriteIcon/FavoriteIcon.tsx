import React from 'react'
import { ReactComponent as Favorite } from '../../media/svg/wishlist.svg';
import * as INT from '../../helpers/interfaces'

const FavoriteIcon: React.FC<INT.IHeaderProps> = (): JSX.Element => {
  return (
    <div className="favorite-icon__wrapper"
      data-test="favorite-icon-component">
      <Favorite />
      <span className="favorite-icon__counter"
        data-test="favorite-icon-counter">
        5
      </span>
    </div>
  )
}

export default FavoriteIcon
