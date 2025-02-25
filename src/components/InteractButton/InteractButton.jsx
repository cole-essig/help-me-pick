import './InteractButton.css';
import React from 'react';

function InteractButton({ setMadeChoice, setRandomPick, table, onClick }) {
    const getRandomItem = () => {
        if (table.length > 0) {
            return table[Math.floor((Math.random()*table.length))];
        }
    }
    const buttonSubmit = (e) => {
      e.preventDefault();
      setRandomPick(getRandomItem());
      onClick();
      setTimeout(() => {
        setMadeChoice(true);
      }, 5000);
    }
    return (
        <>
          <button type='button' className='interact-button' onClick={buttonSubmit} >CHOOSE</button>
        </>
    )
}

export default InteractButton;
