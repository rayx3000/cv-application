import React from 'react'
import './Buttons.css';

const Buttons = () => {
  return (
    <div className='buttons'>
        <button id='view'><i class="fa-solid fa-eye"></i></button>
        <button id='print'><i class="fa-solid fa-print"></i></button>
    </div>
  )
}

export default Buttons