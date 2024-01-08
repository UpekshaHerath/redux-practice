import React, { useState } from 'react';
// when need to work with redux just need these two imports. Other than nothig. 
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        // this is how data can be send to the store. 
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler}>
            <input 
                type='text'
                placeholder='Enter a Todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddTodo;