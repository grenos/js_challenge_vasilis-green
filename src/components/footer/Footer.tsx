import React from 'react'


const Footer: React.FC = (): JSX.Element => {

  return (
    <div className="footer-wrapper container"
      data-test="footer-component">
      <div className="footer-logo"
        data-test="footer-logo">
        <h1>FOOTER</h1>
      </div>
    </div>
  )
}

export default Footer



