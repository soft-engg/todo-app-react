

import { useState } from 'react';

function App() {
  //array of todos 
  const [todos, setTodos] = useState([])
  //value of the input field 
  const [value, setvalue] = useState("")
  //function to add todos
  function createTodo(event) {
    event.preventDefault()
    setTodos(oldtodos => {
      setvalue("")
      return [...oldtodos, value]
    })
  }


  return (
    <div>
      <h2>Todo app</h2>
      <form onSubmit={createTodo}>
        <input
          type='text'
          value={value}
          onChange={e => {
            setvalue(e.target.value)
          }} />
        <button type='submit'>Add todo</button>
      </form>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
