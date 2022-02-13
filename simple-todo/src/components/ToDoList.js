import React from 'react'
import ToDo from './ToDo.js'

const ToDoList = ({toDoList, handleToggle, handleDelete}) => {
    return (
        <div>
            {toDoList.map(toDo => {
                return (
                    <ToDo toDo={toDo} handleToggle={handleToggle} handleDelete={handleDelete}/>
                )
            })}
        </div>
    )
}

export default ToDoList