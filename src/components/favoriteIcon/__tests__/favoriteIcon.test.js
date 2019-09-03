import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../helpers/testUtils'
import { UNCFavoriteIcon } from '../FavoriteIcon'
Enzyme.configure({ adapter: new EnzymeAdapter() })


const defaultProps = {
  favorites: ['aaa', 'sss', 'eee', 'fff']
}

const setup = ((props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = mount(<UNCFavoriteIcon {...setupProps} />)
  return wrapper
})


test('should render component ', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'favorite-icon-component')
  expect(component.length).toBe(1)
})

test('should render Icon ', () => {
  const wrapper = setup()
  const icon = wrapper.find('ForwardRef(SvgWishlist)')
  expect(icon.length).toBe(1)
})

test('should render Counter ', () => {
  const wrapper = setup()
  const counter = findByTestAttr(wrapper, 'favorite-icon-counter')
  expect(counter.length).toBe(1)
  expect(counter.text()).toEqual('4')
})

test('should not render Counter ', () => {
  const wrapper = setup({ favorites: [] })
  const counter = findByTestAttr(wrapper, 'favorite-icon-counter')
  expect(counter.length).toBe(0)
})

