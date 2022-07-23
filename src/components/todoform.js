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
        <input 
        type="text" 
        className="todo-item"
        placeholder='Add a Todo-Item'
        name='text'
        value={input}
        onChange={handleChange}
        ref={inputRef}
        />
        <button className="todo-button">Add Todo-Item</button>
    </form> 
    );
}
 
export default TodoForm;