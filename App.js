import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Todo from './components/Todo';

export class App extends Component {

  state = {
    todos: [
      'work',
      'swim',
      'study',
      'sleep',
      'run'
    ],
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <Todo
          todos={this.state.todos}
        />
      </View>
    )
  }
}

export default App;
