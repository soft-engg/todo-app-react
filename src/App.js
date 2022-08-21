import { useState } from 'react';

let globalId = 0
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
      return [...oldtodos, { todo: value, id: globalId++ }]
    })
  }
  //function to delete todo form list 
  function deleteTodo(itemId) {
    setTodos(oldtodos => todos.filter(entry => entry.id !== itemId))
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
        {todos.map(entry => {
          return <div>
            <li key={entry.id}>{entry.todo}
            </li>
            <button onClick={() => deleteTodo(entry.id)}>delete</button>
          </div>
        })}
      </ul>
    </div>
  );
}

export default App;
