import React from "react"


function TodoInput(props) {
    return (
        <form className="input-form" onSubmit={props.handleSubmit}>
            <input
                name="input" 
                type="text" 
                placeholder="Add new Todo" 
                onChange={props.handleInput}
                value={props.value} >
                
            </input>
            <button>
                Add
            </button>
        </form>
    )
}

export default TodoInput