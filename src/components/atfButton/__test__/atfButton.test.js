import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../helpers/testUtils'
import { UNCAtfButton } from '../AtfButton'
Enzyme.configure({ adapter: new EnzymeAdapter() })

let addToFavoritesMock = jest.fn()
let removeFromFavoritesMock = jest.fn()

const defaultProps = {
  uuid: 'sss',
  addToFavorites: addToFavoritesMock,
  removeFromFavorites: removeFromFavoritesMock,
  favorites: ['aaa', 'ddd']
}

const setup = ((props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<UNCAtfButton {...setupProps} />)
  return wrapper
})


test('should render component ', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'atf-btn-component')
  expect(component.length).toBe(1)
})


test('should call action to add favorite on click', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'atf-btn-component')
  component.simulate('click')
  expect(addToFavoritesMock).toHaveBeenCalledTimes(1)
  expect(addToFavoritesMock).toHaveBeenCalledWith('sss')
})


test('should call action to remove favorite on click', () => {
  const wrapper = setup({ uuid: 'aaa' })
  const component = findByTestAttr(wrapper, 'atf-btn-component')
  component.simulate('click')
  expect(removeFromFavoritesMock).toHaveBeenCalledTimes(1)
  expect(removeFromFavoritesMock).toHaveBeenCalledWith('aaa')
})
