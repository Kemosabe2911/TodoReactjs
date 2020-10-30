import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <form style={{display: "flex"}} className="form">
                <input style={{flex:'10', padding: "5px"}} type="text" name="title" placeholder="Add Todo" />
                <input style={{flex:'1'}} type="submit" value="Submit" className="btn" />
            </form>
        )
    }
}
