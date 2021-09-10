import React from "react"

function TodoItem(props) {
    return (
        <li>
            <input
                type="checkbox"
                id={props.id}
                checked={props.completed}
                onChange={() => props.handleChange(props.id)}
            />
            <label className={props.completed ? "active": null} htmlFor={props.id}>{props.text}</label>
        </li>  
    ) 
}

export default TodoItem