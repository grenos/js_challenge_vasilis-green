import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions/uiActions'
import * as INT from '../../helpers/interfaces'


export const UNCAtcButton: React.FC<INT.IAtcButtonProps> = ({
  uuid,
  title,
  cover_image_url,
  price,
  children,
  addToCart
}) => {

  const handleAddToCart = () => {
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



// const mapStateToProps = (state: any) => {
//   return {
//     currentPage: state.paginateAllReducer.currentPage,
//     data: state.apiReducer.data
//   }
// }

export default connect(null, {
  addToCart,
})(UNCAtcButton)

