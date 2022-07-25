import React from 'react';
import { useState , useEffect, useRef} from 'react';

const TodoForm = (props) => {
    const [input, setInput]=useState('')

    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
    //prevents the page from refreshing when the submit button is selected.
    const handleSubmit= e => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

    //allows the user to enter the value in the input bar.
    const handleChange= e =>{
        setInput(e.target.value);
    }
    return ( 
    <form className="todo" onSubmit={handleSubmit}>
        {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form> 
    );
}
 
export default TodoForm;