/** We just need this slice. We can name this as controller also. When ever we need to 
 * do a crud we just need to create a slice. And then can when we need to put our data to 
 * redux just need two importes. 
 * 
 */
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: 'Hello'}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
            todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;