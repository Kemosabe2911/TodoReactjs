import React, { Component } from 'react';
import Todoitems from './Todoitems';

class Todos extends Component{
    render(){
        //console.log(this.props.todos)
        return this.props.todos.map((todo) =>(
            <Todoitems todo={ todo } />
        ));
    }
}

export default Todos;