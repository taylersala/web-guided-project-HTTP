import './App.css';
import { useState, useEffect } from 'react';
import { getTodos, postTodo, putTodo, deleteTodo } from './actions/todos';

const initialTodos = [{
  id: 1,
  description: 'say hello',
  isDone: false 
},
{
  id: 2,
  description: 'say hello again',
  isDone: false
}
]

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

useEffect(() => {
  getData();
}, [])

const getData = () => {
  getTodos().then(res => {
    setTodos(res)
  })
}

const addTodo = () => {
  postTodo(todo).then(() => {
    getData();
  })
}

const completeTodo = (todo) => {
  const newTodo = {...todo, isDone: true};
  putTodo(newTodo).then(() => {
    getData();
  })
}

const deleteTodoItem = (id) => {
    deleteTodo(id).then(() => {
      getData();
    })
}

  return (
    <div className="App">
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => addTodo()}>Submit</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <span className={todo.isDone ? 'done' : ''}> {todo.description} </span>
          <span>
            {todo.isDone ? <button onClick={() => deleteTodoItem(todo.id)}>Delete</button> : <button onClick={() => completeTodo(todo)}>Complete</button>}
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
