import React, { useState } from 'react'
import PaginationAll from './PaginationAll'
import PaginationPage from './PaginationPage'
import * as INT from '../../helpers/interfaces'

const Pagination: React.FC<INT.IPaginationProps> = (): JSX.Element => {

  const [toggle, setToggle] = useState<boolean>(true)

  return (
    <div className="pagination-wrapper">
      <button className="pagination-switch"
        onClick={() => setToggle(toggle => !toggle)}>
        Switch
        </button>

      {toggle ? <PaginationAll /> : <PaginationPage />}
    </div>
  )
}

export default Pagination
