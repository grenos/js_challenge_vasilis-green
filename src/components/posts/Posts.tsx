import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as INT from '../../helpers/interfaces'
import Post from '../post/Post'


/**
 * Post component
 * container for Post component
 * handles also 'pagination for posts
 * @function 
 * @param {number} currentPage 
 * @param {array} data - array returned from api call
 * @param {boolean} loading prop for the api call (from parent)
 * @returns {JSX.Element}
 */
export const UNCPosts: React.FC<INT.IPostsProps> = ({ currentPage, data, loading }): JSX.Element => {

  const [postsPerPage] = useState(6);

  // get indexes of first and last post
  // and slice it out of the data array to be displayed(pretend pagination)
  // if current page beeing 1
  const indexOfLastPost = currentPage * postsPerPage; // 6
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 0
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost); // 0 - 6

  if (loading) {
    return <div className="loader" data-test="loader">Loading...</div>
  }

  return (
    <div className="posts-wrapper container" data-test="posts-component">
      {
        // map through the paginated 6 posts to display
        currentPosts.map(({ cover_image_url, title, description, retail_price, net_price, discount, uuid }: INT.IData) => (
          <Post
            key={uuid}
            uuid={uuid}
            cover_image_url={cover_image_url}
            title={title}
            description={description}
            retail_price={retail_price}
            net_price={net_price}
            discount={discount}
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    currentPage: state.paginateAllReducer.currentPage,
    data: state.apiReducer.data
  }
}

export default connect(mapStateToProps, null)(UNCPosts)

