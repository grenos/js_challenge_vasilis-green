import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from '../header/Header'
import axios from 'axios';
import Pagination from '../pagination/Pagination'
import { setData } from '../../redux/actions/apiActions'
import * as INT from '../../helpers/interfaces'


const App: React.FC<INT.IAppProps> = ({ setData }): JSX.Element => {

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(res.data);
      // setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="app-wrapper">
      <Header />

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
