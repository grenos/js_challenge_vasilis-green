import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../helpers/testUtils'
import { UNCBagIcon } from '../BagIcon'
Enzyme.configure({ adapter: new EnzymeAdapter() })

let toggleMiniBagMock = jest.fn()

const defaultProps = {
  cart: ['a', 'b'],
  toggleMiniBag: toggleMiniBagMock
}

const setup = ((props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = mount(<UNCBagIcon {...setupProps} />)
  return wrapper
})


test('should render component ', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'bag-icon-component')
  expect(component.length).toBe(1)
})

test('should render Icon ', () => {
  const wrapper = setup()
  const icon = wrapper.find('ForwardRef(SvgBag)')
  expect(icon.length).toBe(1)
})

test('should render Counter ', () => {
  const wrapper = setup()
  const counter = findByTestAttr(wrapper, 'bag-icon-counter')
  expect(counter.length).toBe(1)
  expect(counter.text()).toBe('2')
})

