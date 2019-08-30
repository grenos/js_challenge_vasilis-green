import React from 'react'
import * as INT from '../../helpers/interfaces'
import Scrollbar from 'react-scrollbars-custom';
import AtcButton from '../atcButton/AtcButton'
import AtfButton from '../atfButton/AtfButton'

const URL = '?q=60&fit=crop&w=300&h=300'

const Post: React.FC<INT.IPostProps> = ({
  cover_image_url,
  title,
  description,
  retail_price,
  net_price,
  discount,
  uuid
}): JSX.Element => {
  return (
    <div className="item-card-wrapper">
      <div className="icon-wrapper">
        <AtfButton uuid={uuid} />
      </div>


      <div className="item-card__wrapper-top">
        <img src={cover_image_url + URL} alt={title} />
        <h3>{title}</h3>
        <Scrollbar noDefaultStyles style={{ height: 60 }}>
          {description ? <p>{description}</p> : <p>Descrizione non disponibile!</p>}
        </Scrollbar>
      </div>

      <div className="item-card__wrapper-bottom">
        <div className="price-wrapper">
          <h5 className={discount === 0 ? 'strike' : 'price'}>{retail_price.formatted_value}</h5>
          {discount === 0
            ? <h5 className="discounted">{net_price.formatted_value}</h5>
            : null}
        </div>

        <AtcButton uuid={uuid}>
          ADD TO CART
        </AtcButton>

      </div>

    </div>
  )
}

export default Post
