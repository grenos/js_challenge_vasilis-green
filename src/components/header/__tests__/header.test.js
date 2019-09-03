import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr, storeFactory } from '../../../helpers/testUtils'
import { UNCHeader } from '../Header'
Enzyme.configure({ adapter: new EnzymeAdapter() })

const defaultProps = {
  total: 120,
}


const setup = ((initialState = {}, props = {}) => {
  const store = storeFactory(initialState)
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<UNCHeader store={store} {...setupProps} />)
  return wrapper
})


test('should render component ', () => {
  const wrapper = setup()
  console.log(wrapper.debug());
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
  const bag = wrapper.find('Connect(UNCBagIcon)')
  expect(bag.length).toBe(1)
})

test('should render favorite icon', () => {
  const wrapper = setup()
  const favorite = wrapper.find('Connect(UNCFavoriteIcon)')
  expect(favorite.length).toBe(1)
})

// missing total price test