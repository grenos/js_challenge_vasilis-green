import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../redux/actions/uiActions'
import { ReactComponent as Atf } from '../../media/svg/atf-icon.svg';
import * as INT from '../../helpers/interfaces'


/**
 * Add to Favorites Button Component
 * checks if favorites array includes current item 
 * @function
 * @param {string} uuid
 * @param {Function} addToFavorites - ACTION - adds item to favs if not already present
 * @param {Function} removeFromFavorites - ACTION - removes item if already on favorites
 * @param {Array} favorites - array of favorites
 * @returns {JSX.Element} 
 */
export const UNCAtfButton: React.FC<INT.IAtfProps> = ({
  uuid,
  addToFavorites,
  removeFromFavorites,
  favorites
}): JSX.Element => {

  const [active, setActive] = useState(false)

  const handleFavorites = (uuid: string): void => {
    if (favorites.includes(uuid)) {
      removeFromFavorites(uuid)
      setActive(false)
    } else {
      addToFavorites(uuid)
      setActive(true)
    }
  }


  return (
    <button className={active ? 'ATF__button-wrapper active' : 'ATF__button-wrapper'}
      data-test="atf-btn-component"
      onClick={() => handleFavorites(uuid)}>
      <Atf />
    </button>
  )
}

const mapStateToProps = (state: any) => {
  return {
    favorites: state.favoritesReducer.favorites
  }
}

export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites
})(UNCAtfButton)

