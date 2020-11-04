import React, { useState } from 'react';
import './App.css';


function Todo({todo, index}){
  return(
    <div className="todo">
      {todo.text}
    </div>
  )
}

function TodoForm({ addTodo }){
  const [value,setValue]= useState('');

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={ e=> setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos]= useState([
    {
      text: 'Todo List item1',
      isCompleted: false
    },
    {
      text: 'Todo List item2',
      isCompleted: false
    },
    {
      text: 'Todo List item3',
      isCompleted: false
    }
  ]);

  return (
    <div className="App">
      <div className="container">
        {todos.map((todo, index) =>(
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
