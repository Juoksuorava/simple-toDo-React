import React from 'react'
 
const ToDo = ({toDo, handleToggle, handleDelete}) => {
    
    const handleCLick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    

    const handleDeleteBtn = (e) => {
        e.preventDefault()
        handleDelete(toDo.id)
    }

    return (
        <div className='todo'>
            <span
            id={toDo.id}
            key={toDo.item + toDo.id}
            className={toDo.finished ? 'finished-todo' : 'unfinished-todo'}
            onClick={handleCLick}>
                {toDo.item + ' '}
            </span>
            <button
            onClick={handleDeleteBtn}
            className='deleteToDoBtn'>
                x
            </button>
        </div>

   );
};
 
export default ToDo