import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../helpers/testUtils'
import { UNCPagination } from '../Pagination'
import { data } from '../../../helpers/testData'
Enzyme.configure({ adapter: new EnzymeAdapter() })


let setCurrentPageMock = jest.fn()
const defaultProps = {
  currentPage: 1,
  setCurrentPage: setCurrentPageMock,
  data: data
}

const setup = ((props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<UNCPagination {...setupProps} />)
  return wrapper
})


test('should render component', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'pagination-component')
  expect(component.length).toBe(1)
})

test('should render go to start button', () => {
  const wrapper = setup()
  const start = findByTestAttr(wrapper, 'start')
  expect(start.length).toBe(1)
})

test('should render go back 1 button', () => {
  const wrapper = setup()
  const back = findByTestAttr(wrapper, 'back')
  expect(back.length).toBe(1)
})

test('should render go fwd 1 button', () => {
  const wrapper = setup()
  const fwd = findByTestAttr(wrapper, 'fwd')
  expect(fwd.length).toBe(1)
})

test('should render go to end button', () => {
  const wrapper = setup()
  const end = findByTestAttr(wrapper, 'end')
  expect(end.length).toBe(1)
})

test('should render 2 page buttons', () => {
  const wrapper = setup()
  const page = findByTestAttr(wrapper, 'page')
  expect(page.length).toBe(2)
})


// ON CLICK EVENTS

test('should go to next page on click', () => {
  const wrapper = setup()
  const fwd = findByTestAttr(wrapper, 'fwd')
  fwd.simulate('click')
  expect(setCurrentPageMock).toHaveBeenCalledTimes(1)
  expect(setCurrentPageMock).toHaveBeenCalledWith(2)
})


test('should go to end page on click', () => {
  const wrapper = setup()
  const end = findByTestAttr(wrapper, 'end')
  end.simulate('click')

  // called twice in the tests only
  expect(setCurrentPageMock).toHaveBeenCalledTimes(2)
  expect(setCurrentPageMock).toHaveBeenCalledWith(2)
})


test('should go to start page on click', () => {
  const wrapper = setup({}, { currentPage: 2 })
  const start = findByTestAttr(wrapper, 'start')
  start.simulate('click')

  // called thrice in the tests only
  expect(setCurrentPageMock).toHaveBeenCalledTimes(3)
  expect(setCurrentPageMock).toHaveBeenCalledWith(1)
})

test('should go to back page on click', () => {
  const wrapper = setup({}, { currentPage: 2 })
  const back = findByTestAttr(wrapper, 'back')
  back.simulate('click')

  // called 4 times in the tests only
  expect(setCurrentPageMock).toHaveBeenCalledTimes(4)
  expect(setCurrentPageMock).toHaveBeenCalledWith(1)
})



