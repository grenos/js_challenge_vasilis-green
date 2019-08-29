import React from 'react'
import * as INT from '../../helpers/interfaces'


const URL = '?q=60&fit=crop&w=300&h=300'

const Post: React.FC<INT.IPostProps> = ({
  cover_image_url,
  title,
  description,
  price,
  discount
}): JSX.Element => {
  return (
    <div>
      <img src={cover_image_url + URL} alt={title} />
      <h3>
        {title}
      </h3>
      <p>
        {description}
      </p>
      <h5>
        {price.formatted_value}
      </h5>
    </div>
  )
}

export default Post
