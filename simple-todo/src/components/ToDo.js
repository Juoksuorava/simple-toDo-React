import React from 'react'

const ToDo = (props) => {
    return (
        <li>
            {props.text}
            <button onClick={() => props.deleteTodo(props.id)}> Delete </button>
        </li>
    )
}

export default ToDo