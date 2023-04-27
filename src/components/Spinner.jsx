import React from 'react'
import'../styles/Spinner.css'



function Spinner() {
  return (
    <div className='d-flex-spinner'>
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </div>
  )
}

export default Spinner
