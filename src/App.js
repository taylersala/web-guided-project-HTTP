import './App.css';
import { useState, useEffect } from 'react';
import { getTodos } from './actions/todos';

const todos = [{
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
  const [todo, setTodo] = useState('');

useEffect(() => {
  getTodos().then(res => {
    console.log('this will be the result');
    console.log(res);
  });
}, [])

  return (
    <div className="App">
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button>Submit</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <span className={todo.isDone ? 'done' : ''}> {todo.description} </span>
          <span>
            <button>{todo.isDone ? 'Delete' : 'Complete' }</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
