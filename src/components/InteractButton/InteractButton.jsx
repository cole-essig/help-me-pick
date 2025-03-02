import './InteractButton.css';
import React from 'react';

function InteractButton({ setMadeChoice, setRandomPick, setPickedItems, table, pickedItems, onClick }) {
    const getRandomItem = () => {
        const nonPickedItems = table.filter(item => !pickedItems.includes(item))
        if (nonPickedItems.length > 0) {
            return nonPickedItems[Math.floor((Math.random()*nonPickedItems.length))];
        }
    }
    const buttonSubmit = (e) => {
      setMadeChoice(false);
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
