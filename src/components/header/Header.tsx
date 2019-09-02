import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BagIcon from '../bagIcon/BagIcon'
import FavoriteIcon from '../favoriteIcon/FavoriteIcon'
import * as INT from '../../helpers/interfaces'

export const UNCHeader: React.FC<INT.IHeaderProps> = ({ total }): JSX.Element => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (total > 0) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [total])

  return (
    <div className="header-wrapper container"
      data-test="header-component">
      <div className="header-logo"
        data-test="header-logo">
        <h1>BRAND</h1>
      </div>

      <div className="header__icon-wrapper">
        {show &&
          <div className="header__total-price"
            data-test="header-total-price">
            <p>{total.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</p>
          </div>}
        <BagIcon />
        <FavoriteIcon />
      </div>

    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    total: state.cartReducer.total,
  }
}

export default connect(mapStateToProps, null)(UNCHeader)



