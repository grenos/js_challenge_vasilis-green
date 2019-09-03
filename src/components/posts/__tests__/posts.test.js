import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../helpers/testUtils'
import { UNCPosts } from '../Posts'
import { data } from '../../../helpers/testData'
Enzyme.configure({ adapter: new EnzymeAdapter() })


const defaultProps = {
  currentPage: 1,
  loading: true,
  data: data
}

const setup = ((props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<UNCPosts {...setupProps} />)
  return wrapper
})

test('should render loader placeholder ', () => {
  const wrapper = setup()
  const loader = findByTestAttr(wrapper, 'loader')
  expect(loader.length).toBe(1)
})


test('should render component ', () => {
  const wrapper = setup({ loading: false })
  const component = findByTestAttr(wrapper, 'posts-component')
  expect(component.length).toBe(1)
})


// posts passed to test are 7
test('should render 6 posts per page', () => {
  const wrapper = setup({ loading: false })
  const post = wrapper.find('Post')
  expect(post.length).toBe(6)
})

test('should render remaining posts on next page', () => {
  const wrapper = setup({ currentPage: 2, loading: false })
  const post = wrapper.find('Post')
  expect(post.length).toBe(1)
})


test('should pass correct data to child component', () => {
  const wrapper = setup({ loading: false })
  const post = wrapper.find('Post').first()
  expect(post.prop('uuid')).toEqual('aaa-aaa')
  expect(post.prop('cover_image_url')).toEqual('img.jpg')
  expect(post.prop('title')).toEqual('Musei Gratis per Tutti')
  expect(post.prop('description')).toEqual('blah blah')
  expect(post.prop('retail_price')).toEqual('200£')
  expect(post.prop('net_price')).toEqual('199£')
  expect(post.prop('discount')).toEqual(1)
})

