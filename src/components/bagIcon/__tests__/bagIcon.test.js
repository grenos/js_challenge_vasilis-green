import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../helpers/testUtils'
import BagIcon from '../BagIcon'
Enzyme.configure({ adapter: new EnzymeAdapter() })


const setup = (() => {
  const wrapper = shallow(<BagIcon />)
  return wrapper
})


test('should render component ', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'bag-icon-component')
  expect(component.length).toBe(1)
})

test('should render Icon ', () => {
  const wrapper = setup()
  const icon = wrapper.find('ForwardRef(SvgBag)').dive()
  expect(icon.length).toBe(1)
})

test('should render Counter ', () => {
  const wrapper = setup()
  const counter = findByTestAttr(wrapper, 'bag-icon-counter')
  expect(counter.length).toBe(1)
})

