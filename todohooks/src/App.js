import React, { useState } from 'react';
import './App.css';


function Todo({todo, index}){
  return(
    <div className="todo" style={ {textDecoration: todo.isCompleted ? 'line-through': ''}}>
      {todo.text}
    <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
    </div>
    </div>
  )
}

function TodoForm({ addTodo }){
  const [value,setValue]= useState('');

  const handleSubmit = e=> {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="Add Todo" value={value} onChange={ e=> setValue(e.target.value)} />
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

  const addTodo = text =>{
    const newTodos= [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index =>{
    const newTodos= [...todos];
    newTodos[index].isCompleted= true;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container">
        {todos.map((todo, index) =>(
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
