import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions/uiActions'
import * as INT from '../../helpers/interfaces'


export const UNCAtcButton: React.FC<INT.IAtcButtonProps> = ({
  uuid,
  title,
  cover_image_url,
  price,
  children,
  addToCart,
  cart
}) => {

  const handleAddToCart = (): void => {
    addToCart({ uuid, title, cover_image_url, price })
  }

  return (
    <button className="ATC__button-wrapper"
      data-test="ATC-btn-component"
      onClick={handleAddToCart}>
      {children}
    </button>
  )
}


const mapStateToProps = (state: any) => {
  return {
    cart: state.cartReducer.cart,
  }
}

export default connect(mapStateToProps, {
  addToCart
})(UNCAtcButton)

