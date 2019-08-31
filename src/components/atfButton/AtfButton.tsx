import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../redux/actions/uiActions'
import { ReactComponent as Atf } from '../../media/svg/atf-icon.svg';
import * as INT from '../../helpers/interfaces'


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
    favorites: state.uiReducer.favorites
  }
}

export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites
})(UNCAtfButton)

