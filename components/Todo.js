import React from 'react';
import { ScrollView } from 'react-native';

// Todo Items
import TodoItems from '../components/TodoItems';

const Todo = props => {
  return (
    <ScrollView>
      <TodoItems
        todos={props.todos}
      />
    </ScrollView>
  );
};

export default Todo;