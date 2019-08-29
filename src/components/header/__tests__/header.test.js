import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../helpers/testUtils'
import Header from '../Header'
Enzyme.configure({ adapter: new EnzymeAdapter() })


const setup = (() => {
  const wrapper = shallow(<Header />)
  return wrapper
})


test('should render component ', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'header-component')
  expect(component.length).toBe(1)
})

test('should render logo', () => {
  const wrapper = setup()
  const logo = findByTestAttr(wrapper, 'header-logo')
  expect(logo.length).toBe(1)
})

test('should render bag icon', () => {
  const wrapper = setup()
  const bag = wrapper.find('BagIcon')
  expect(bag.length).toBe(1)
})


test('should render favorite icon', () => {
  const wrapper = setup()
  const favorite = wrapper.find('FavoriteIcon')
  expect(favorite.length).toBe(1)
})

