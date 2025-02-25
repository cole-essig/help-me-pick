import './TableKey.css'
import React from 'react'

function TableKey({ content }) {
    return (
        <div className='tablekey'>
            <p className='tablekey__content'>{content}</p>
        </div>
    )
}

export default TableKey;