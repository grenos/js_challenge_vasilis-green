import React from 'react'

const AtcButton = (props: any) => {
  return (
    <button className="ATC__button-wrapper"
      data-test="ATC-btn-component"
      onClick={() => console.log('add to cart')}>
      {props.children}
    </button>
  )
}

export default AtcButton
