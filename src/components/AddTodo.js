import React from 'react'

class AddTodo extends React.Component {
    state = {
        content : "",
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="newTodo"
                        value={this.state.content}
                        placeholder="Add a new todo..."
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo