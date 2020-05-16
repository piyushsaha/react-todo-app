import React from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './style.css'

class App extends React.Component {
    state = {
        todos: [
            { id: 1, content: "This is a basic todo app" },
            { id: 2, content: "Add a todo using the text field" }
        ]
    }

    deleteTodo = (id) => {
        let todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })

        this.setState({
            todos: todos
        })
    }

    addTodo = (todo) => {
        todo.id = Math.random()
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div className="container center">
                <h1 className="center blue-text">Todos</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo}/>
            </div >
        )
    }
}
export default App