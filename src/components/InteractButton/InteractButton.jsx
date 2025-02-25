import './InteractButton.css';
import React from 'react';

function InteractButton({ setMadeChoice }) {
    const buttonSubmit = (e) => {
      e.preventDefault();
      setMadeChoice(true);
    }
    return (
        <>
          <button type='button' className='interact-button' onClick={buttonSubmit} >CHOOSE</button>
        </>
    )
}

export default InteractButton;
