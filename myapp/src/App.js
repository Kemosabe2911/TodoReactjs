import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component{
  state= {
    todo:[
      {
        id: 1,
        title: 'Do homework',
        completed: false 
      },
      {
        id: 2,
        title: 'Do homework2',
        completed: false 
      },
      {
        id: 2,
        title: 'Do homework3',
        completed: false 
      }
    ]
  }


  render(){
      return(
        <div className="App">
        <Todos />
        </div>
      )
  }
}


export default App;
