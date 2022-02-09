import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.addToDo}>
            <div>
                <input value={props.state.new_todo} onChange={(e) => props.handleTodo(e)}/>
                <button type='submit'></button>
            </div>
        </form>
    )
}

export default Form