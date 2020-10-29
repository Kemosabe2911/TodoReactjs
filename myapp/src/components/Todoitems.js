import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitems extends Component {
    getStyle = () =>{
        return{
            background: "#f4f4f4",
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: "10px",
            borderBottom: "1px solid #ccc"
        }
    }
    render() {
        return (
            <div style= {this.getStyle() }>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

//PropTypes
Todoitems.propTypes ={
    todo: PropTypes.object.isRequired
}

export default Todoitems
