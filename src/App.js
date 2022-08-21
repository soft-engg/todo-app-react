
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [value, setvalue] = useState("")
  function createTodo() {

    setTodos(oldtodos => {
      setvalue("")
      return [...oldtodos, value]
    })
  }
  return (
    <div>
      <h2>Todo app</h2>
      <input type='text' value={value} onChange={event => {
        setvalue(event.target.value)
      }} ></input>
      <button onClick={createTodo}>Add todo</button>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
