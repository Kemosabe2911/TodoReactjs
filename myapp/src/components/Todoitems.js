import React, { Component } from 'react'

export class Todoitems extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

export default Todoitems
