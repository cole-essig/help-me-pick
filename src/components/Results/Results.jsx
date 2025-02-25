import './Results.css'
import React from 'react'

function Results({ table }) {
    const getRandomItem = () => {
        if (table.length > 0) {
            return table[Math.floor((Math.random()*table.length))];
        }
    }
    console.log(getRandomItem())
    return (
        <div className='results'>
          <p>{getRandomItem()}</p>
        </div>

    )
}

export default Results;