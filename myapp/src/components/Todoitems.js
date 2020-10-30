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

    /*markComplete= (e) =>{
        console.log(this.props)
    }*/



    render() {
        const { id, title } = this.props.todo;
        return (
            <div style= {this.getStyle() }>
                <p>
                <input type="checkbox" onChange={ this.props.markComplete.bind( this, id) } />
                {' '}
                { title}
                <button onClick= {this.props.delTodo.bind(this,id)} style={ btnStyle }>Remove</button>    
                </p>
            </div>
        )
    }
}

//PropTypes
Todoitems.propTypes ={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


const btnStyle ={
    background: "#ff0000",
    color: "#ffffff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    float: "right"
}

export default Todoitems
