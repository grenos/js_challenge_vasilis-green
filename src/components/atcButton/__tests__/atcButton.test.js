import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../helpers/testUtils'
import { UNCAtcButton } from '../AtcButton'
Enzyme.configure({ adapter: new EnzymeAdapter() })


let addToCartMock = jest.fn()
const defaultProps = {
  uuid: 'aaa',
  title: 'Musei Gratis per Tutti',
  cover_image_url: 'name.jpg',
  price: 300,
  addToCart: addToCartMock,
  cart: ['qqq']
}


const setup = ((props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<UNCAtcButton {...setupProps} />)
  return wrapper
})


test('should render component', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'atc-component')
  expect(component.length).toBe(1)
})

test('should render counter', () => {
  const wrapper = setup()
  const counter = findByTestAttr(wrapper, 'atc-counter')
  expect(counter.length).toBe(1)
})

test('should display correct amount of item in cart', () => {
  const wrapper = setup()
  const counter = findByTestAttr(wrapper, 'atc-counter')
  expect(counter.text()).toEqual('qqq')
})

test('should NOT render counter', () => {
  const wrapper = setup({ cart: [] })
  const counter = findByTestAttr(wrapper, 'atc-counter')
  expect(counter.length).toBe(0)
})

test('should render button', () => {
  const wrapper = setup()
  const btn = findByTestAttr(wrapper, 'ATC-btn-component')
  expect(btn.length).toBe(1)
})

test('should call action with right props', () => {
  const wrapper = setup()
  const btn = findByTestAttr(wrapper, 'ATC-btn-component')
  btn.simulate('click')
  expect(addToCartMock).toHaveBeenCalledTimes(1)
  expect(addToCartMock).toHaveBeenCalledWith({
    "cover_image_url": "name.jpg",
    "price": 300,
    "title": "Musei Gratis per Tutti",
    "uuid": "aaa"
  })
})
