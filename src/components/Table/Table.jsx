import './Table.css';
import React from 'react';
import TableKey from '../TableKey/TableKey';

function Table({ table }) {
    return (
    <div className='table'>
        <h3 className='table__header'>Options</h3>
        <div className='table__contents'>
            {table.length > 0 && table.map((item, index) => {
                return <TableKey key={index} content={item} />
            })}
        </div>
    </div>
    )
}

export default Table;