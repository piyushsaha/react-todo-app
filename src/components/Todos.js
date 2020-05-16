import React from 'react'
import './Todos.css'

function Todos(props) {
    const todoList = props.todos.length ? (
        props.todos.map(todo => {
            return (
                <div className="container-item a-todo" key={todo.id}>
                    <p className="center">
                        {todo.content}
                        <span onClick={() => {props.deleteTodo(todo.id)}} className="delete">
                            Delete
                        </span>
                    </p>
                </div>
            )
        })
    ) : (
            <p className="center">You have no pending task, yay!</p>
        )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos