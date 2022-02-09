import React from 'react';
import './App.css';
import axios from 'axios'
import Form from './components/Form'
import ToDoList from './components/ToDoList';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      todolist: [],
      new_todo: '',
    }
  }

  addTodo = (event) => {
    event.preventDefault()
    let mounted = true;
    axios.post(`http://localhost:3001/todolist`, this.state.new_todo).then(response => {
      console.log(response.data)
      if(mounted) {
        this.setState({
          todolist: this.state.todolist.concat(response.data),
          new_todo: ''
        })
      }})
    return () => mounted = false
  }

  deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todolist/${id}`).then(response => {
      console.log(response.data)
      this.setState({
        todolist: this.state.todolist.filter(todo => todo.id !== id)
      })}).catch(error => {
      console.log(error)
    })
  }
  
  componentDidMount(){
    axios.get('http://localhost:3001/todolist').then(response => {
      console.log(response)
      this.setState({
        todolist: response.data
      })
    })
  }

  handleTodo = (event) => {
    this.setState({new_todo: event.target.value})
  }

  render() {
    return (
      <div>
        <h1> To Do -lista </h1>
        <Form state={this.state} addTodo={this.addTodo} handleTodo={this.handleTodo}/>
        <ToDoList todolist={this.state.todolist} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}
export default App;