import React, { useState } from 'react'

const Form = ({addItem}) => {

    const [ input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            value={input}
            type="text"
            onChange={handleChange}
            className='form-input'
            placeholder="Enter task"
            >
            </input>
            <button className='form-button'> + </button>
        </form>
    );
}

export default Form