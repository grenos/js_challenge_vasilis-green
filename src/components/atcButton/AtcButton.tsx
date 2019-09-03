import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions/uiActions'
import * as INT from '../../helpers/interfaces'

/**
 * Add to Cart Button Component
 * rendered inside the post component
 * calls action to add item to cart
 * displays quantity of each item on cart
 * gets data from parent and from store
 * @function
 * @param {string} uuid 
 * @param {string} title 
 * @param {string} cover_image_url 
 * @param {number} price 
 * @param {Function} addToCart - Action to add to cart passing all above props
 * @param {array} cart - displays quantity of each item on cart
 * @returns {JSX.Element} 
 */
export const UNCAtcButton: React.FC<INT.IAtcButtonProps> = ({
  uuid,
  title,
  cover_image_url,
  price,
  addToCart,
  cart
}): JSX.Element => {

  const handleAddToCart = (): void => {
    addToCart({ uuid, title, cover_image_url, price })
  }

  return (
    <div className="atc-btn__wrapper--outer" data-test="atc-component">
      {/* eslint-disable-next-line */}
      {cart.map((qt: any, idx: number) => {
        if (qt !== null) {
          return (
            <span className="atcbtn__counter" data-test="atc-counter" key={idx}>
              {qt}
            </span>
          )
        }
      })}
      <button className="ATC__button-wrapper"
        data-test="ATC-btn-component"
        onClick={handleAddToCart}>
        ADD TO CART
      </button>
    </div >
  )
}


const mapStateToProps = (state: any, props: any) => {
  // possibily the worst way to do it
  // better do it in reducer sending to a new piece of cart state
  // an array with objects that contains the uuid of item and individual quantity
  return {
    cart: state.cartReducer.cart.map((item: any) => (item.uuid === props.uuid ? item.quantity : null))
  }
}

export default connect(mapStateToProps, {
  addToCart
})(UNCAtcButton)

