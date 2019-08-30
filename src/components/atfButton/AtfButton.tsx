import React from 'react'
import { ReactComponent as Atf } from '../../media/svg/atf-icon.svg';

const AtfButton = (props: any) => {
  return (
    <button className="ATF__button-wrapper"
      data-test="atf-bt-component"
      onClick={() => console.log('add to favs')}>
      <Atf />
    </button>
  )
}

export default AtfButton
