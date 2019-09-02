import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as INT from '../../../helpers/interfaces'
import Scrollbar from 'react-scrollbars-custom';
import { ReactComponent as Cancel } from '../../../media/svg/cancel.svg';
import { removeFromCart, addQuantity, removeQuantity } from '../../../redux/actions/uiActions'
import useWindowSize from '@rehooks/window-size';


const URL = '?q=60&fit=crop&w=100&h=100'
/**
 *
 *
 * @param {*} {
 *   cart,
 *   total,
 *   removeFromCart,
 *   addQuantity,
 *   removeQuantity
 * }
 * @returns {JSX.Element}
 */
const UNCBagPopUpItem: React.FC<INT.IBagItemProps> = ({
  cart,
  total,
  removeFromCart,
  addQuantity,
  removeQuantity
}): JSX.Element => {

  let ww = useWindowSize();
  const [_WW, set_WW] = useState(0)

  useEffect(() => {
    if (ww.innerWidth <= 666) {
      set_WW(80)
    } else {
      set_WW(100)
    }
  }, [ww.innerWidth])


  if (!cart.length) {
    return <div className="empty-cart">Nothing in your cart yet!</div>
  }


  return (
    <div className="bag-items__wrapper">

      <div className="bag-items__scroll-outer-wrapper">
        <Scrollbar noDefaultStyles style={{ height: `calc(100vh - ${_WW}px)` }}>
          {cart.map((item: INT.ICartItem) => (
            <div className="bag-item__wrapper" key={item.uuid}>
              <div className="bag-item__thumb">
                <img src={item.cover_image_url + URL} alt={item.title} />
              </div>

              <div className="flex-col-wrapper">
                <div className="bag-item__title">
                  <h5>
                    {item.title}
                  </h5>
                </div>

                <div className="flex-row-wrapper">
                  <div className="bag-item__qt">
                    <p>
                      {item.quantity} <span>X</span> {item.price.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
                    </p>
                  </div>
                  <div className="bag-item__subtract-qt"
                    onClick={() => removeQuantity(item.uuid)}>
                    -
                  </div>
                  <div className="bag-item__add-qt"
                    onClick={() => addQuantity(item.uuid)}>
                    +
                  </div>
                </div>
              </div>

              <span className="bag-item__delete" onClick={() => removeFromCart(item.uuid)}>
                <Cancel />
              </span>

            </div>
          ))}
        </Scrollbar>
      </div>


      <div className="bag-items__total">
        <h4>
          <span>CARD SUBTOTAL:</span>  {total.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
        </h4>
      </div>

    </div>
  )
}


const mapStateToProps = (state: any) => {
  return {
    cart: state.cartReducer.cart,
    total: state.cartReducer.total
  }
}

export default connect(mapStateToProps, {
  removeFromCart,
  addQuantity,
  removeQuantity
})(UNCBagPopUpItem)


