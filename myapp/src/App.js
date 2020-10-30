import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component{
  state= {
    todos:[
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
        id: 3,
        title: 'Do homework3',
        completed: false 
      }
    ]
  }

  markComplete = (id) =>{
    console.log(id);
  }

  render(){
    //console.log(this.state.todos);
      return(
        <div className="App">
        <Todos todos={this.state.todos} markComplete={ this.markComplete } />
        </div>
      )
  }
}


export default App;
