import React, { useState } from 'react'
import data from './data.json'
import Header from './components/Header.js'
import ToDoList from './components/ToDoList.js'
import Form from './components/Form.js'
import './App.css'
 
function App() {
  const [ toDoList, setToDoList ] = useState(data)
  
  const handleToggle = (id) => {
    let mapped = toDoList.map(item => {
      return item.id === Number(id) ? { ...item, finished: !item.finished} : {...item}
    })
    setToDoList(mapped)
  }

  const handleDelete = (id) => {
    let filtered = toDoList.filter(item => {
      return item.id !== Number(id)
    })
    setToDoList(filtered)
  }

  const addItem = (input) => {
    let updated = [...toDoList, {id: toDoList.length + 1, item: input, finished: false}]
    setToDoList(updated)
  }

  const sortItems = () => {
    let sorted = [...toDoList].sort((a, b) => a.item > b.item ? 1 : -1)
    setToDoList(sorted)
  }

  const clearItems = () => {
    let emptyList = []
    setToDoList(emptyList)
  }

  return (
   <div className="App">
    	<Header />
      <Form addItem={addItem}/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete}/>
      <button onClick={sortItems}>Sort alphabetically</button> <button onClick={clearItems}>Clear all tasks</button>
   </div>
  );
}
 
export default App;