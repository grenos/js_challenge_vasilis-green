import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../../helpers/testUtils'
import { UNCBagPopUpItem } from '../../bagPopUp__item/BagPopUpItem'
Enzyme.configure({ adapter: new EnzymeAdapter() })


let removeFromCartMock = jest.fn()
let addQuantityMock = jest.fn()
let removeQuantityMock = jest.fn()


const defaultProps = {
  cart: [{
    title: 'aaa',
    cover_image_url: 'ddd.jpg',
    uuid: '1234',
    quantity: 2,
    price: 335
  }],
  total: 1000,
  removeFromCart: removeFromCartMock,
  addQuantity: addQuantityMock,
  removeQuantity: removeQuantityMock
}

const URL = '?q=60&fit=crop&w=100&h=100'

const setup = ((props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<UNCBagPopUpItem {...setupProps} />)
  return wrapper
})


test('should render component', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'bag-item-component')
  expect(component.length).toBe(1)
})

test('should render "cart is empty" div', () => {
  const wrapper = setup({ cart: [] })
  const empty = findByTestAttr(wrapper, 'empty-cart')
  expect(empty.length).toBe(1)
})


test('should render thumb image', () => {
  const wrapper = setup()
  const img = findByTestAttr(wrapper, 'item-img')
  expect(img.length).toBe(1)
  expect(img.props().src).toEqual(`ddd.jpg${URL}`)
})

test('should render title', () => {
  const wrapper = setup()
  const title = findByTestAttr(wrapper, 'item-title')
  expect(title.length).toBe(1)
  expect(title.text()).toEqual('aaa')
})


test('should render price and quantity', () => {
  const wrapper = setup()
  const qt = findByTestAttr(wrapper, 'item-qt')
  expect(qt.length).toBe(1)
  expect(qt.text())
    .toEqual(`2 X ${defaultProps.cart[0].price.toLocaleString(
      'it-IT', { style: 'currency', currency: 'EUR' }
    )}`)
})


test('should call subtract-qt Action with correct props', () => {
  const wrapper = setup()
  const subQT = findByTestAttr(wrapper, 'item-sub-qt')
  expect(subQT.length).toBe(1)
  subQT.simulate('click')
  expect(removeQuantityMock).toHaveBeenCalledTimes(1)
  expect(removeQuantityMock).toHaveBeenCalledWith('1234')
})


test('should call add-qt Action with correct props', () => {
  const wrapper = setup()
  const addQT = findByTestAttr(wrapper, 'item-add-qt')
  expect(addQT.length).toBe(1)
  addQT.simulate('click')
  expect(addQuantityMock).toHaveBeenCalledTimes(1)
  expect(addQuantityMock).toHaveBeenCalledWith('1234')
})


test('should call remove item Action with correct props', () => {
  const wrapper = setup()
  const deleteItem = findByTestAttr(wrapper, 'item-delete')
  expect(deleteItem.length).toBe(1)
  deleteItem.simulate('click')
  expect(removeFromCartMock).toHaveBeenCalledTimes(1)
  expect(removeFromCartMock).toHaveBeenCalledWith('1234')
})









