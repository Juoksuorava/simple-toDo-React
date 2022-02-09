import React from 'react'
import ToDo from './ToDo'

const ToDoList = (props) => {
    return (
        <ul>
            {props.todolist.map(todo => <ToDo key={todo.id} id={todo.id} deleteTodo={props.deleteTodo} text={todo.text}/>)}
        </ul>
    )
}

export default ToDoList