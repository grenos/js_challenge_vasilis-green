import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from '../../../helpers/testUtils'
import { UNCBagPopUp } from '../BagPopUp'
Enzyme.configure({ adapter: new EnzymeAdapter() })


let toggleMiniBagMock = jest.fn()
const defaultProps = {
  isMiniBagToggle: 'true',
  toggleMiniBag: toggleMiniBagMock
}


const setup = ((initialState = {}, props = {}) => {
  const store = storeFactory(initialState)
  const setupProps = { ...defaultProps, ...props }
  const wrapper = mount(
    // provider to render connected children
    <Provider store={store}>
      <UNCBagPopUp {...setupProps} />
    </Provider>
  )
  return wrapper
})


test('should render component', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'bag-component').last()
  expect(component.length).toBe(1)
})

test('should render info', () => {
  const wrapper = setup()
  const info = findByTestAttr(wrapper, 'modal-info')
  expect(info.length).toBe(1)
})


test('should render bag item component', () => {
  const wrapper = setup()
  const info = wrapper.find('UNCBagPopUpItem')
  expect(info.length).toBe(1)
})



