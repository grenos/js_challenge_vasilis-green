import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../helpers/testUtils'
import Post from '../Post'
Enzyme.configure({ adapter: new EnzymeAdapter() })


const defaultProps = {
  cover_image_url: 'img.jpg',
  title: 'Musei Gratis per Tutti',
  description: 'blah blah',
  retail_price: { formatted_value: '199£' },
  net_price: { formatted_value: '200£' },
  discount: 1,
  uuid: 'aaa-aaa'
}

const setup = ((props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<Post {...setupProps} />)
  return wrapper
})


test('should render component', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'card-component')
  expect(component.length).toBe(1)
})

test('should render favorites icon', () => {
  const wrapper = setup()
  const favIcon = wrapper.find('Connect(UNCAtfButton)')
  expect(favIcon.length).toBe(1)
})

test('should render image', () => {
  const wrapper = setup()
  const img = wrapper.find('img')
  expect(img.length).toBe(1)
})

test('should render title', () => {
  const wrapper = setup()
  const title = wrapper.find('h3')
  expect(title.length).toBe(1)
  expect(title.text()).toEqual('Musei Gratis per Tutti')
})

test('should render description', () => {
  const wrapper = setup()
  const text = wrapper.find('p')
  expect(text.length).toBe(1)
  expect(text.text()).toEqual('blah blah')
})

test('should render normal price', () => {
  const wrapper = setup({ discount: 0 })
  const price = wrapper.find('h5')
  expect(price.length).toBe(1)
  expect(price.text()).toEqual('200£')
})


test('should render both prices', () => {
  const wrapper = setup()
  const prices = wrapper.find('h5')
  expect(prices.length).toBe(2)
  expect(prices.first().text()).toEqual('200£')
  expect(prices.last().text()).toEqual('199£')
})

test('should render add to cart button', () => {
  const wrapper = setup()
  const atcBtn = wrapper.find('Connect(UNCAtcButton)')
  expect(atcBtn.length).toBe(1)
})

