import './UserInput.css';
import { useState } from 'react';
import React from 'react';

function UserInput({ getUserInput }) {
    const [input, setInput] = useState('');
    const handleInputBarChange = (e) => {
        setInput(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getUserInput(input);
        setInput('');
    }
    
        return(
            <>
            <form className="inputbar" onSubmit={handleSubmit} >
                    <input 
                        type='text'
                        className='inputbar__input'
                        id='inputBar'
                        placeholder='Enter Option'
                        value={input}
                        onChange={handleInputBarChange}
                    />
                <button type="submit" className="inputbar__button" >New Option</button>
            </form>
            </>
        )
    };

export default UserInput;