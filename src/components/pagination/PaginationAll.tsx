import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setCurrentPage } from '../../redux/actions/paginateAllActions'
import { generatePagination } from '../../helpers/pagination'
import * as INT from '../../helpers/interfaces'
import { ReactComponent as ArrowLeft } from '../../media/svg/arrow-left.svg';
import { ReactComponent as ArroeRight } from '../../media/svg/arrow-right.svg';


const PaginationAll: React.FC<INT.IPaginateAllProps> = ({ currentPage, data, setCurrentPage }): JSX.Element => {

  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="paginate-all__wrapper" data-test="paginate-all-component">
      <ul data-test="paginate-all-list">

        <li onClick={() => setCurrentPage(1)}>
          <ArrowLeft />
          <ArrowLeft />
        </li>
        <li onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}>
          <ArrowLeft />
        </li>

        {generatePagination(currentPage, pageNumbers.slice(-1)[0]).map((item: number, i: number) => (
          <li key={i}>
            <a onClick={() => setCurrentPage(item)} href='#'
              className={currentPage === item ? 'active' : ''}>
              {item}
            </a>
          </li>
        ))}

        <li onClick={() => setCurrentPage(currentPage < pageNumbers.slice(-1)[0] ? currentPage + 1 : currentPage)}>
          <ArroeRight />
        </li>
        <li onClick={() => setCurrentPage(pageNumbers.slice(-1)[0])}>
          <ArroeRight />
          <ArroeRight />
        </li>
      </ul>

    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    currentPage: state.paginateAllReducer.currentPage,
    data: state.apiReducer.data
  }
}

export default connect(mapStateToProps, {
  setCurrentPage,
})(PaginationAll)
