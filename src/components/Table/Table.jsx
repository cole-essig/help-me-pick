import './Table.css';
import { useState } from 'react';
import React from 'react';
import TableKey from '../TableKey/TableKey';
import InteractButton from '../InteractButton/InteractButton';
import Results from '../Results/Results';

function Table({ setMadeChoice, setRandomPick, table, randomPick, madeChoice }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [pickedItems, setPickedItems] = useState([]);

    const addPickedItems = (input) => {
        setPickedItems((pickedItems) => [input, ...pickedItems])
    }

    const startAnimation = () => {
        let index = 0;
        const interval = setInterval(() => {
            setActiveIndex(index);
            index = (index + 1) % table.length;
        }, 50); 

        setTimeout(() => {
            clearInterval(interval);
            setActiveIndex(null); 
        }, 3000);
    };
    
    const onClick = () => {
        startAnimation()
    }

    return (
    <div className='table'>
        <h3 className='table__header'>Options</h3>
        <div className='table__contents'>
            {table.length > 0 && table.map((item, index) => {
                let alreadyPicked = false
                if (pickedItems.includes(item)) {
                    alreadyPicked = true
                }
                return <TableKey key={index} content={item} activeIndex={activeIndex} index={index} alreadyPicked={alreadyPicked} />
            })}
        </div>
        <InteractButton 
          setMadeChoice={setMadeChoice} 
          setRandomPick={setRandomPick}
          setPickedItems={addPickedItems} 
          table={table}
          onClick={onClick} 
        />
        {madeChoice && <Results randomPick={randomPick} madeChoice={madeChoice} />}
    </div>
    )
}

export default Table;