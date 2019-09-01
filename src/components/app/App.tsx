import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from '../header/Header'
import Posts from '../posts/Posts'
import BagPopUp from '../bagPopUp/BagPopUp'
import axios from 'axios';
import Pagination from '../pagination/Pagination'
import { setData } from '../../redux/actions/apiActions'
import * as INT from '../../helpers/interfaces'


const App: React.FC<INT.IAppProps> = ({ setData, isMiniBagToggle }): JSX.Element => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    callApi()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isMiniBagToggle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isMiniBagToggle]);

  const callApi = () => {
    setLoading(setLoading => !setLoading)
    axios({
      method: 'get',
      url: `https://api.musement.com/api/v3/venues/164/activities?limit=60&offset=0`,
      headers: {
        'accept-language': 'it',
        'content-type': 'application/json',
        'x-musement-currency': 'EUR',
        'x-musement-version': '3.3.2'
      }
    }).then(res => {
      setData(res.data)
      setLoading(setLoading => !setLoading)
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <div className="app-wrapper">
      <Header />
      <Posts loading={loading} />
      <Pagination />
      <BagPopUp />
    </div>
  )
}


const mapStateToProps = (state: any) => {
  return {
    isMiniBagToggle: state.uiReducer.isMiniBagToggle,
  }
}


export default connect(mapStateToProps, { setData })(App)
