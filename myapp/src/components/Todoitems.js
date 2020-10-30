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

    markComplete= (e) =>{
        console.log(this.props)
    }


    render() {
        return (
            <div style= {this.getStyle() }>
                <input type="checkbox" onChange={ this.markComplete } />
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
