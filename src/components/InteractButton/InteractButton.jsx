import './InteractButton.css';
import React from 'react';

function InteractButton({ setMadeChoice, setRandomPick, setPickedItems, table, onClick }) {
    const getRandomItem = () => {
        if (table.length > 0) {
            return table[Math.floor((Math.random()*table.length))];
        }
    }
    const buttonSubmit = (e) => {
      e.preventDefault();
      const randomItem = getRandomItem();
      setRandomPick(randomItem);
      onClick();
      setTimeout(() => {
        setMadeChoice(true);
        setPickedItems(randomItem);
      }, 3000);
    }
    return (
        <>
          <button type='button' className='interact-button' onClick={buttonSubmit} >CHOOSE</button>
        </>
    )
}

export default InteractButton;
