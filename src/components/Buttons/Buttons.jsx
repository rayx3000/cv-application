import React, { useContext } from 'react'
import './Buttons.css';
import { AppContext } from '../../App.jsx';

const Buttons = () => {
  const { isCvVisible, setIsCvVisible } = useContext(AppContext);

  return (
    <div className='buttons'>
        <button 
          id='view' 
          onClick={() => setIsCvVisible(!isCvVisible)}
          style={{ borderRadius: !isCvVisible ? '8px' : undefined }}
        >
          <i className="fa-solid fa-eye"></i>
        </button>
        {isCvVisible && (
          <button id='print' onClick={() => window.print()}>
            <i className="fa-solid fa-print"></i>
          </button>
        )}
    </div>
  )
}

export default Buttons