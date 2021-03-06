import React from 'react'
import '../App.css'

import Square from './Square'

const Squares = () => {
  const squareArr = new Array(377).fill(<Square/>)
  return (
    <div className='board'>
      {squareArr}
    </div>
  )
}

export default Squares
