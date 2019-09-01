import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Favorite } from '../../media/svg/wishlist.svg';
import * as INT from '../../helpers/interfaces'

export const UNCFavoriteIcon: React.FC<INT.IFavIconProps> = ({ favorites }): JSX.Element => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (favorites.length > 0) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [favorites.length])


  return (
    <div className="favorite-icon__wrapper"
      data-test="favorite-icon-component">
      <Favorite />
      {show
        && <span className="favorite-icon__counter"
          data-test="favorite-icon-counter">
          {favorites.length}
        </span>}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    favorites: state.favoritesReducer.favorites
  }
}

export default connect(mapStateToProps, null)(UNCFavoriteIcon)


