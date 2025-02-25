import './TableKey.css'
import React from 'react'

function TableKey({ content, activeIndex, index }) {
    return (
        <div className={`tablekey ${activeIndex === index ? 'tablekey_on' : ''}`}>
            <p className='tablekey__content'>{content}</p>
        </div>
    )
}

export default TableKey;