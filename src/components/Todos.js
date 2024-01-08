import React from 'react';
/**
 * useSelector is resoponsible to read data from redux. 
 * we have the access to state usign useSelector hook.
*/
import {useSelector} from 'react-redux';

function Todos() {
    const todos = useSelector(state => state.todos)
    console.log(todos);

  return (
    <>
        <div>Todos</div>
        {
            todos.map((todo) => (
                <div key={todo.id}>{todo.text}</div>
            ))
        }
    </>
  )
}

export default Todos;