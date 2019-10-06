import React, { Component } from 'react';
import { Text, View } from 'react-native';

import AddTodo from './containers/AddTodo';
import Todo from './components/Todo';

import deepCopy from './helpers/clone';

export class App extends Component {

  state = {
    todos: [],
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

  render() {
    return (
      <View style={{ padding: 10 }}>
        <AddTodo
          addTodo={this.addTodo}
        />
        <Todo
          todos={this.state.todos}
          removeTodo={this.removeTodo}
        />
      </View>
    )
  }
}

export default App;
