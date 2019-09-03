import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import { Transition, animated as a } from 'react-spring/renderprops.cjs'
import * as INT from '../../helpers/interfaces'
import { toggleMiniBag } from '../../redux/actions/uiActions'
import { useOnClickOutside } from '../../helpers/useOnClickOutside'
import BagPopUpItem from './bagPopUp__item/BagPopUpItem'
import useWindowSize from '@rehooks/window-size';


/**
 * Mini Bag Modal Component
 * uses react portal
 * on click on the background closes the modal calling action
 * @function
 * @param {boolean} isMiniBagToggle
 * @param {Function} toggleMiniBag - ACTION
 * @returns {JSX.Element}
 */
export const UNCBagPopUp: React.FC<INT.IBagModal> = ({ isMiniBagToggle, toggleMiniBag }): JSX.Element => {

  // create portal
  const modalRoot = document.getElementById('bag-root')
  const el: HTMLDivElement = document.createElement('div');

  // for hiding modal info on smaller screens
  let ww = useWindowSize();

  // click outside to close modal
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => toggleMiniBag());

  // add/remove portal
  useEffect(() => {
    modalRoot!.appendChild(el)
    return () => {
      modalRoot!.removeChild(el)
    }
  }, [el, modalRoot])

  // animation for modal 
  // leave prop needs fixing
  return ReactDOM.createPortal(
    <Transition
      items={isMiniBagToggle}
      from={{ transform: 'translate3d(100%, 0, 0)', opacity: 0 }}
      enter={{ transform: 'translate3d(0%, 0, 0)', opacity: 1 }}
      leave={{ transform: 'translate3d(100%, 0, 0)', opacity: 0 }}>
      {isMiniBagToggle => isMiniBagToggle && (animVal =>
        <a.div style={animVal} className="modal-wrapper">
          {ww.innerWidth > 768 && <div className="modal-info-wrapper">
            <div className="modal-info-inner">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem porro sint perspiciatis maiores adipisci. Quae repellendus cumque sed ipsa blanditiis distinctio molestias animi, rem odio exercitationem? Eius laboriosam optio ex.
              </p>
            </div>
          </div>}
          <div className="minibag-wrapper" ref={ref}>
            <BagPopUpItem />
          </div>
        </a.div>
      )}
    </Transition>,
    el
  )
}

const mapStateToProps = (state: any) => {
  return {
    isMiniBagToggle: state.uiReducer.isMiniBagToggle,
  }
}

export default connect(mapStateToProps, { toggleMiniBag })(UNCBagPopUp)



