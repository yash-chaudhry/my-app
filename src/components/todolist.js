import React from'react'
import {useState} from 'react'
import TodoForm from './todoform'
import Todo from './todo'

const TodoList = () => {
    const [todos, setTodos]=useState([])
    const addTodo= todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return ;
        }
        const newTodos=[todo, ...todos];
        setTodos(newTodos);
        console.log(todos);
    }
    const updateTodos=(TodoId, newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return ;
        }

        setTodos(prev=> prev.map(item => (item.id===TodoId ? newValue : item)));
    }
    const removeTodo = id=> {
        const removeEdit=[...todos].filter(todo=>todo.id!==id);

        setTodos(removeEdit);
    }

    const completeTodo=id =>{
        let updatedTodos=todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    return ( 
        <div>
            <h1>Today's Plan</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodos={updateTodos}/>
            
        </div>
    );
}
 
export default TodoList;