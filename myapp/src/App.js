import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

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

  //Toggle Complete
  markComplete = (id) =>{
    //console.log(id);
    this.setState( { todos: this.state.todos.map( todo => {
      if(todo.id === id){
        todo.completed= !todo.completed;
      }
      return todo;
    })});
  }
  
  //Delete Todo
  delTodo = (id) =>{
    //console.log('hello');
    this.setState({todos: [...this.state.todos.filter( todo =>
      todo.id !== id )]
    })}


  //Add Todo
  addTodo = (title) =>{
    console.log(title);
  }

  render(){
    //console.log(this.state.todos);
      return(
        <div className="App" style={Container }>
          <Header />
          <AddTodo addTodo= {this.addTodo} />
          <Todos todos={this.state.todos} markComplete={ this.markComplete } delTodo ={this.delTodo} />
        </div>
      )
  }
}

const Container = {
  width: "90vw",
  margin: "auto"
}


export default App;
