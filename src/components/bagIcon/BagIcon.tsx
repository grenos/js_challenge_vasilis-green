import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Bag } from '../../media/svg/bag.svg';
import * as INT from '../../helpers/interfaces'

export const UNCBagIcon: React.FC<INT.IBagIconProps> = ({ cart }): JSX.Element => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (cart.length > 0) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [cart.length])


  return (
    <div className="bag-icon__wrapper"
      data-test="bag-icon-component">
      <Bag />
      {show
        && <span className="bag-icon__counter"
          data-test="bag-icon-counter">
          {cart.length}
        </span>}
    </div >
  )
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.cartReducer.cart,
  }
}

export default connect(mapStateToProps, null)(UNCBagIcon)


