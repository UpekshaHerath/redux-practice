import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;

/**
 * 1. Create a store
 * 2. Wrap the App using store using the provider
 * 3. Create a slice
 *      - Create the intial state of your data
 *      - create the slice using createSlice method
 *          - porvide a name for the slice
 *          - give the initial state
 *          - provide the reducers as many as you have like addTodo, removeTodo and so on...
 *          - export the reducer out of the slice which created. Because this will be used in store.
 *          - export the individual reducers and we have to use those. 
 */
