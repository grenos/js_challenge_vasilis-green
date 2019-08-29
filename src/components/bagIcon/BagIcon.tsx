import React from 'react'
import { ReactComponent as Bag } from '../../media/svg/bag.svg';


const BagIcon = () => {
  return (
    <div className="bag-icon__wrapper"
      data-test="bag-icon-component">
      <Bag />
      <span className="bag-icon__counter"
        data-test="bag-icon-counter">
        21
      </span>
    </div >
  )
}

export default BagIcon
