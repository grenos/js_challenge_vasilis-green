import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as INT from '../../../helpers/interfaces'
import Scrollbar from 'react-scrollbars-custom';
import { ReactComponent as Cancel } from '../../../media/svg/cancel.svg';
import { switchStatement } from '@babel/types';

interface props {
  cart: any
  total: any
}

const URL = '?q=60&fit=crop&w=100&h=100'

export const UNCBagPopUpItem: React.FC<props> = ({ cart, total }) => {


  return (
    <div className="bag-items__wrapper">
      <Scrollbar noDefaultStyles style={{ height: '100vh' }}>

        {cart.map((item: any) => (
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
                <div className="bag-item__subtract-qt">
                  -
                </div>
                <div className="bag-item__qt">
                  <p>
                    {item.quantity} <span>X</span> £ {item.price.toFixed(2)}
                  </p>
                </div>
                <div className="bag-item__add-qt">
                  +
                </div>
              </div>
            </div>

            <span className="bag-item__delete" onClick={() => console.log('hghg')}>
              <Cancel />
            </span>

          </div>
        ))}

      </Scrollbar>

      <div className="bag-items__total">
        <h4>
          CARD SUBTOTAL: £{total}
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

export default connect(mapStateToProps, null)(UNCBagPopUpItem)


