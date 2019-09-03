import React, { useState, useEffect } from 'react'
import * as INT from '../../helpers/interfaces'
import Scrollbar from 'react-scrollbars-custom';
import AtcButton from '../atcButton/AtcButton'
import AtfButton from '../atfButton/AtfButton'
import loadingImg from '../../media/images/loading.png'
import errorImg from '../../media/images/error.png'

const URL = '?q=60&fit=crop&w=300&h=300'

/**
 * Indivisual post component
 * displays paginaed posts sent from parent component
 * @function
 * @param {string} cover_image_url 
 * @param {string} title
 * @param {string} description
 * @param {number} retail_price
 * @param {number} net_price
 * @param {number} discount
 * @param {string} uuid
 * @returns {JSX.Element}
 */
const Post: React.FC<INT.IPostProps> = ({
  cover_image_url,
  title,
  description,
  retail_price,
  net_price,
  discount,
  uuid
}): JSX.Element => {

  const [error, setError] = useState(false)
  const [loading, setLoad] = useState(true)
  const [img, setImg] = useState<string>()

  // check if image has finished loading after render
  // use placeholders accordingly if needed
  useEffect(() => {
    if (loading) {
      setImg(loadingImg)
    } else if (!loading) {
      setImg(cover_image_url + URL)
    }

    if (error) {
      setImg(errorImg)
    }
  }, [loading, error, cover_image_url])


  return (
    <div className="item-card-wrapper"
      data-test="card-component">

      <div className="icon-wrapper">
        <AtfButton uuid={uuid} />
      </div>

      <div className="item-card__wrapper-top">
        <img src={img}
          alt={title}
          onLoad={() => setLoad(false)}
          onError={() => setError(true)}
        />

        {/* fail safe in case description or title is not available */}
        <h3>{title ? title : 'Nessun Titolo'}</h3>
        <Scrollbar noDefaultStyles style={{ height: 60 }}>
          {description ? <p>{description}</p> : <p>Descrizione non disponibile!</p>}
        </Scrollbar>
      </div>

      <div className="item-card__wrapper-bottom">
        <div className="price-wrapper">

          {/* fail safe if prices are not available */}
          <h5 className={discount > 0 ? 'strike' : 'price'}>
            {net_price.formatted_value ? net_price.formatted_value : 'N/A'}
          </h5>
          {discount > 0
            ? <h5 className="price">{
              retail_price.formatted_value
                ? retail_price.formatted_value
                : 'N/A'}
            </h5>
            : null}
        </div>

        <AtcButton
          uuid={uuid}
          title={title}
          cover_image_url={cover_image_url}
          price={discount > 0 ? retail_price.value : net_price.value}
        />

      </div>
    </div>
  )
}

export default Post
