import './Table.css';
import { useState } from 'react';
import React from 'react';
import TableKey from '../TableKey/TableKey';
import InteractButton from '../InteractButton/InteractButton';

function Table({ setMadeChoice, setRandomPick, table }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const startAnimation = () => {
        let index = 0;
        const interval = setInterval(() => {
            setActiveIndex(index);
            index = (index + 1) % table.length;
        }, 50); 

        setTimeout(() => {
            clearInterval(interval);
            setActiveIndex(null); 
        }, 5000);
    };
    
    const onClick = () => {
        startAnimation()
    }

    return (
    <div className='table'>
        <h3 className='table__header'>Options</h3>
        <div className='table__contents'>
            {table.length > 0 && table.map((item, index) => {
                return <TableKey key={index} content={item} activeIndex={activeIndex} index={index} />
            })}
        </div>
        <InteractButton 
          setMadeChoice={setMadeChoice} 
          setRandomPick={setRandomPick} 
          table={table}
          onClick={onClick} 
        />
    </div>
    )
}

export default Table;