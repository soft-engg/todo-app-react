
import './App.css';
import { useState } from 'react';

function App() {
  //array of todos 
  const [todos, setTodos] = useState([])
  //value of the input field 
  const [value, setvalue] = useState("")
  //function to add todos
  function createTodo() {
    setTodos(oldtodos => {
      setvalue("")
      return [...oldtodos, value]
    })
  }
  //function to add todos for the enter key pressed 
  function checkforenterkey(e) {
    if (e.keyCode === 13)
      createTodo()
  }

  return (
    <div>
      <h2>Todo app</h2>
      <input
        onKeyDown={checkforenterkey}
        type='text'
        value={value}
        onChange={event => {
          setvalue(event.target.value)
        }} />
      <button onClick={createTodo}>Add todo</button>
      <form></form>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
