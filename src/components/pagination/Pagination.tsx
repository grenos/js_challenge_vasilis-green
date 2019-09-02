import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setCurrentPage } from '../../redux/actions/paginateAllActions'
// @ts-ignore
import { generatePagination } from '../../helpers/pagination'
import * as INT from '../../helpers/interfaces'
import { ReactComponent as ArrowLeft } from '../../media/svg/arrow-left.svg';
import { ReactComponent as ArroeRight } from '../../media/svg/arrow-right.svg';
import useWindowSize from '@rehooks/window-size';

export const UNCPagination: React.FC<INT.IPaginateAllProps> = ({
  currentPage,
  data,
  setCurrentPage
}): JSX.Element => {

  let ww = useWindowSize()
  const [_WW, set_WW] = useState(false)

  useEffect(() => {
    if (ww.innerWidth <= 668) {
      set_WW(true)
    } else {
      set_WW(false)
    }
  }, [ww.innerWidth])


  const [postsPerPage] = useState(6);

  const pageNumbers: number[] = [];
  // as long as i is true (so once at a time)
  // take lenght of data and devide by number of posts per page
  // to find number of pages (basically paginate the array)
  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToStart = (): void => {
    setCurrentPage(1)
  }

  const goToPrev = (): void => {
    setCurrentPage(
      currentPage > 1
        ? currentPage - 1
        : currentPage
    )
  }

  const goToFwd = (): void => {
    setCurrentPage(
      currentPage < pageNumbers.slice(-1)[0]
        ? currentPage + 1
        : currentPage
    )
  }

  const goToEnd = (): void => {
    setCurrentPage(pageNumbers.slice(-1)[0])
  }

  return (
    <div className="pagination-wrapper" data-test="pagination-component">
      <div className="paginate-all__wrapper">
        <ul data-test="paginate-all-list">

          <li>
            <a href="!#" onClick={goToStart} data-test="start">
              <ArrowLeft />
              <ArrowLeft />
            </a>
          </li>

          <li>
            <a href="!#" onClick={goToPrev} data-test="back">
              <ArrowLeft />
            </a>
          </li>

          {/* function that groups visible pages and generates ellipsis */}
          {/* also check if return value is 'ellipsis' then is not making it a link */}
          {generatePagination(currentPage, pageNumbers.slice(-1)[0], _WW).map((item: number, i: number) => (
            <li key={i}>
              {(typeof item === typeof 'string')
                ? <span>{item}</span>
                : <a onClick={() => setCurrentPage(item)} href="!#" data-test="page"
                  className={currentPage === item ? 'active' : ''} style={{ cursor: 'pointer' }}>
                  {item}
                </a>}
            </li>
          ))}

          <li >
            <a href="!#" onClick={goToFwd} data-test="fwd">
              <ArroeRight />
            </a>
          </li>

          <li>
            <a href="!#" onClick={goToEnd} data-test="end">
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
})(UNCPagination)
