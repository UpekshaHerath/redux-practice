import React from 'react';
/**
 * useSelector is resoponsible to read data from redux. 
 * we have the access to state usign useSelector hook.
*/
import {useSelector} from 'react-redux';

import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";


function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    console.log(todos);

  return (
    <>
        <div>Todos</div>
        {
            todos.map((todo) => (
                <div>
                    <div key={todo.id}>
                        {todo.text}
                    </div>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                </div>
            ))
        }

    </>
  )
}

export default Todos;