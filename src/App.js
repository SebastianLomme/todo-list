import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import TodoInput from "./TodoInput"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todosData,
      input: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.input === "") {
      return
    } else {
      const newObject = {
        id: this.state.todos.length + 1,
          text: this.state.input,
          completed: false,
    
      }
      const neWarray = []
      this.setState((prev) => {
        neWarray.push(...prev.todos, newObject)
        return {
          todos: neWarray,
          input:""
        }
      })
    }
    
  }

  handleInput(event) {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos:updatedTodos
      }
    }
    )
  }

  render() {
    const todoArray =
      this.state.todos.map(todo =>
        <TodoItem
          key={todo.id}
          text={todo.text}
          id={todo.id}
          completed={todo.completed}
          handleChange={this.handleChange}
        />)

    return (
      <div className="App">
        <div className="container">
          <h3>Todo List</h3>
          <TodoInput
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
            value={this.state.input}
          />
          <ul className="todo-list">
            {todoArray}
            </ul>
        </div>
      </div>
    );
  }

}

export default App;
