import React, { Component } from 'react';
import Todoitems from './Todoitems';
import PropTypes from 'prop-types';

class Todos extends Component{
    /*markComplete = () =>{
        console.log('Hello');
    }*/


    render(){
        //console.log(this.props.todos)
        return this.props.todos.map((todo) =>(
            <Todoitems key={ todo.id } todo={ todo } markComplete= {this.props.markComplete } />
        ));
    }
}

//PropTypes
Todos.propTypes ={
    todos: PropTypes.array.isRequired
}

export default Todos;