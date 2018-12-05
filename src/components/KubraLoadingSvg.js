import React from 'react'

const KubraLoadingSvg = ({ message }) => {
  return (
    <div className="loading">
      <svg className="loading__svg" id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 103.7 146.7'>
          <polygon className='loading__svg--tri-1' points='1.8,1.3 1.8,62 92.1,1.3' />
          <polygon className='loading__svg--tri-2' points='4.7,73.3 101.9,138.7 101.9,8' />
          <polygon className='loading__svg--tri-3' points='1.8,84.6 1.8,145.3 92.1,145.3' />
      </svg>
      <div>{message}</div>
    </div>
  )
}

export default KubraLoadingSvg;
