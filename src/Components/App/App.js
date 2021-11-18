import React from 'react';
import './App.css';
import Add from '../Add/Add.js';
import List from '../List/List.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [], prime: [] }; 
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(todo) {
    let todos = this.state.todoList;
    todos = todos.filter(currentTodo => currentTodo !== todo);
    this.setState({ todoList: todos });
  }

  addTodo(todo) {
    let todos = this.state.todoList;
    todos.push(todo); 
    this.setState( {todoList: todos} );
  }

  render() {
  return (
    <div className="container">
      <h1 className="Header">joe's to-do list</h1>
      <div className="Background">
      </div>
      <div className="Add">
        <Add className="Add" type="text" onAdd={this.addTodo}/>
      </div>
      <div className="ItemList">
        <List todoList={this.state.todoList} onRemove={this.removeTodo}/>
      </div>
    </div>
    )
  }
}

export default App;
