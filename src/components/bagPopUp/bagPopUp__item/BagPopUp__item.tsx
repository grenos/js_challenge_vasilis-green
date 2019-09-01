import React from 'react'
import { connect } from 'react-redux'
import * as INT from '../../../helpers/interfaces'

interface props {
  cart: any
}

const UNCBagPopUp__item: React.FC<props> = ({ cart }) => {
  return (
    <div>

    </div>
  )
}


const mapStateToProps = (state: any) => {
  return {
    cart: state.cartReducer.cart,
  }
}

export default connect(mapStateToProps, null)(UNCBagPopUp__item)


