import React from 'react'
import * as INT from '../../helpers/interfaces'
import Scrollbar from 'react-scrollbars-custom';

const URL = '?q=60&fit=crop&w=300&h=300'

const Post: React.FC<INT.IPostProps> = ({
  cover_image_url,
  title,
  description,
  retail_price,
  net_price,
  discount
}): JSX.Element => {
  return (
    <div className="item-card-wrapper">

      <div className="item-card__wrapper-top">
        <img src={cover_image_url + URL} alt={title} />
        <h3>{title}</h3>
        <Scrollbar noDefaultStyles style={{ height: 60 }}>
          {description ? <p>{description}</p> : <p>Not Available!</p>}
        </Scrollbar>
      </div>

      <div className="item-card__wrapper-bottom">
        <div className="price-wrapper">
          <h5 className={discount === 0 ? 'strike' : 'price'}>{retail_price.formatted_value}</h5>
          {discount === 0
            ? <h5 className="discounted">{net_price.formatted_value}</h5>
            : null}
        </div>

        <button >
          ADD TO CART
        </button>

      </div>

    </div>
  )
}

export default Post
