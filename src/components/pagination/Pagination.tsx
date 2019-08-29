import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setCurrentPage } from '../../redux/actions/paginateAllActions'
// @ts-ignore
import { generatePagination } from '../../helpers/pagination'
import * as INT from '../../helpers/interfaces'
import { ReactComponent as ArrowLeft } from '../../media/svg/arrow-left.svg';
import { ReactComponent as ArroeRight } from '../../media/svg/arrow-right.svg';


const PaginationAll: React.FC<INT.IPaginateAllProps> = ({ currentPage, data, setCurrentPage }): JSX.Element => {

  const [postsPerPage] = useState(6);

  const pageNumbers: number[] = [];
  // as long as i is true (so once at a time)
  // take lenght of data and devide by number of posts per page
  // to find number of pages (basically paginate the array)
  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToStart = () => {
    setCurrentPage(1)
  }

  const goToPrev = () => {
    setCurrentPage(
      currentPage > 1
        ? currentPage - 1
        : currentPage
    )
  }

  const goToFwd = () => {
    setCurrentPage(
      currentPage < pageNumbers.slice(-1)[0]
        ? currentPage + 1
        : currentPage
    )
  }

  const goToEnd = () => {
    setCurrentPage(pageNumbers.slice(-1)[0])
  }

  return (
    <div className="pagination-wrapper">
      <div className="paginate-all__wrapper" data-test="paginate-all-component">
        <ul data-test="paginate-all-list">

          <li>
            <a href="!#" onClick={goToStart}>
              <ArrowLeft />
              <ArrowLeft />
            </a>
          </li>

          <li>
            <a href="!#" onClick={goToPrev}>
              <ArrowLeft />
            </a>
          </li>

          {/* function that groups visible pages and generates ellipsis */}
          {generatePagination(currentPage, pageNumbers.slice(-1)[0]).map((item: number, i: number) => (
            <li key={i}>
              <a onClick={() => setCurrentPage(item)} href="!#"
                className={currentPage === item ? 'active' : ''}>
                {item}
              </a>
            </li>
          ))}

          <li >
            <a href="!#" onClick={goToFwd}>
              <ArroeRight />
            </a>
          </li>

          <li>
            <a href="!#" onClick={goToEnd}>
              <ArroeRight />
              <ArroeRight />
            </a>
          </li>
        </ul>

      </div>
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
