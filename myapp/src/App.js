import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {v4 as uuid} from "uuid";

class App extends Component{
  state= {
    todos:[
      {
        id: uuid(),
        title: 'Do homework',
        completed: false 
      },
      {
        id: uuid(),
        title: 'Do homework2',
        completed: false 
      },
      {
        id: uuid(),
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
    //console.log(title);
    const newTodo ={
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render(){
    //console.log(this.state.todos);
      return(
        <Router>
          <div className="App" style={Container }>
          <Header />
          <Route exact path="/" render={ props =>(
            <React.Fragment>
              <AddTodo addTodo= {this.addTodo} />
            <Todos todos={this.state.todos} markComplete={ this.markComplete } delTodo ={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
        </Router>
      )
  }
}

const Container = {
  width: "90vw",
  margin: "auto"
}


export default App;
