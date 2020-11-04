import React, { useState } from 'react';
import './App.css';

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
      
    </div>
  );
}

export default App;
