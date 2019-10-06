import React, { Component } from 'react';
import { Text, View } from 'react-native';

import AddTodo from './containers/AddTodo';
import Todo from './components/Todo';

import deepCopy from './helpers/clone';

export class App extends Component {

  state = {
    todos: [],
    todo: {
      id: null,
      name: '',
      isFinished: false,
    },
    isEdit: false,
  }

  addTodo = input => {
    const newArray = deepCopy(this.state.todos);
    newArray.push(input);

    this.setState({ todos: newArray });
  }

  removeTodo = todoId => {
    const newArray = deepCopy(this.state.todos);
    const todos = newArray.filter(todo => todo.id !== todoId ? todo : null);
    this.setState({ todos });
  }

  checkedTodo = todoId => {
    const newArray = deepCopy(this.state.todos);
    const todos = newArray.map(todo => {
      if (todo.id == todoId) todo.isFinished = !todo.isFinished;
      return todo;
    });
    this.setState({ todos });
  }

  editTodo = todoId => {
    this.setState({ isEdit: !this.state.isEdit });
    const data = this.state.todos.find(todo => todo.id == todoId);
    const todo = { ...data };
    this.setState({ todo });
  }

  updateNewTodo = input => {
    const newArray = deepCopy(this.state.todos);
    const todos = newArray.map(todo => {
      if (todo.id == input.id) {
        todo = { ...input };
      }
      return todo;
    });
    this.setState({ todos, isEdit: !this.state.isEdit });
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <AddTodo
          todo={this.state.todo}
          addTodo={this.addTodo}          
          isEdit={this.state.isEdit}
          updateNewTodo={this.updateNewTodo}
        />
        <Todo
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          checkedTodo={this.checkedTodo}
          editTodo={this.editTodo}
        />
      </View>
    )
  }
}

export default App;
