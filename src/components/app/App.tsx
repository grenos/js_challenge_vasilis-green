import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from '../header/Header'
import Posts from '../posts/Posts'
import axios from 'axios';
import Pagination from '../pagination/Pagination'
import { setData } from '../../redux/actions/apiActions'
import * as INT from '../../helpers/interfaces'


const App: React.FC<INT.IAppProps> = ({ setData }): JSX.Element => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    callApi()

  }, [])

  const callApi = () => {
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
      console.log(res)
      setData(res.data)
    })
  }

  return (
    <div className="app-wrapper">
      <Header />

      <Posts loading={loading} />

      <Pagination />
    </div>
  )
}

// const mapStateToProps = (state: any) => {
//   return {
//     currentPage: state.paginateAllReducer.currentPage,
//     data: state.apiReducer.data
//   }
// }

export default connect(null, {
  setData,
})(App)
