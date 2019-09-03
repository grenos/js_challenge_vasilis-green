import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../helpers/testUtils'
import { UNCApp } from '../App'
Enzyme.configure({ adapter: new EnzymeAdapter() })


let setDataMock = jest.fn()
const defaultProps = {
  setData: setDataMock,
  isMiniBagToggle: false,
}


const setup = ((props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<UNCApp {...setupProps} />)
  return wrapper
})


test('should render component', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'app-component')
  expect(component.length).toBe(1)
})

test('should render header', () => {
  const wrapper = setup()
  const header = wrapper.find('Connect(UNCHeader)')
  expect(header.length).toBe(1)
})

test('should render posts', () => {
  const wrapper = setup()
  const posts = wrapper.find('Connect(UNCPosts)')
  expect(posts.length).toBe(1)
})

test('should render pagination', () => {
  const wrapper = setup()
  const pagination = wrapper.find('Connect(UNCPagination)')
  expect(pagination.length).toBe(1)
})

test('should render bag', () => {
  const wrapper = setup()
  const bag = wrapper.find('Connect(UNCBagPopUp)')
  expect(bag.length).toBe(1)
})