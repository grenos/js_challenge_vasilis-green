import React from 'react'
import { connect } from 'react-redux'
import { addToCart, removeQuantity } from '../../redux/actions/uiActions'
import * as INT from '../../helpers/interfaces'


export const UNCAtcButton: React.FC<INT.IAtcButtonProps> = ({
  uuid,
  title,
  cover_image_url,
  price,
  children,
  addToCart,
  removeQuantity
}) => {

  const handleAddToCart = () => {
    addToCart({ uuid, title, cover_image_url, price })
  }

  return (

    <>
      <button className="ATC__button-wrapper"
        data-test="ATC-btn-component"
        onClick={handleAddToCart}>
        {children}
      </button>

      <button className="ATC__button-wrapper"
        data-test="ATC-btn-component"
        onClick={() => removeQuantity(uuid)}>
        {children}
      </button>

    </>
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
  removeQuantity
})(UNCAtcButton)

