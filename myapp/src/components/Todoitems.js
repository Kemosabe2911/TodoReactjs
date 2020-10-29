import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitems extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

//PropTypes
Todoitems.propTypes ={
    todo: PropTypes.array.isRequired
}

export default Todoitems
