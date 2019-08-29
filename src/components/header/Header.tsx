import React from 'react'
import BagIcon from '../bagIcon/BagIcon'
import FavoriteIcon from '../favoriteIcon/FavoriteIcon'
import * as INT from '../../helpers/interfaces'

const Header: React.FC<INT.IFavIconProps> = (): JSX.Element => {
  return (
    <div className="header-wrapper container"
      data-test="header-component">
      <div className="header-logo"
        data-test="header-logo">
        <h1>BRAND</h1>
      </div>

      <div className="header__icon-wrapper">
        <div className="header__total-price"
          data-test="header-total-price">
          <p>£250</p>
        </div>
        <BagIcon />
        <FavoriteIcon />
      </div>

    </div>
  )
}

export default Header
