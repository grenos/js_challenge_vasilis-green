import React, { useState, Children } from 'react'
import { connect } from 'react-redux'
import * as INT from '../../helpers/interfaces'
import Post from '../post/Post'

const Posts: React.FC<INT.IPostsProps> = ({ currentPage, data, loading }): JSX.Element => {

  const [postsPerPage] = useState(6);

  // get indexes of first and last post
  // and slice it out of the data array to be displayed(pretend pagination)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="posts-wrapper container">
      {
        currentPosts.map(({ cover_image_url, title, description, retail_price, net_price, discount, uuid }: INT.IData) => (
          <Post
            key={uuid}
            cover_image_url={cover_image_url}
            title={title}
            description={description}
            price={discount === 0 ? retail_price : net_price}
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

export default connect(mapStateToProps, null)(Posts)

