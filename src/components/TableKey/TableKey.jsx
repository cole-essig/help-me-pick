import './TableKey.css'
import React from 'react'

function TableKey({ content, activeIndex, index, alreadyPicked }) {
    return (
        <div className={`tablekey ${activeIndex === index ? 'tablekey_on' : ''} ${alreadyPicked ? 'tablekey_picked' : ''}`}>
            <p className='tablekey__content'>{content}</p>
        </div>
    )
}

export default TableKey;