import React from 'react';
import { ScrollView } from 'react-native';

// Todo Items
import TodoItems from '../components/TodoItems';

const Todo = props => {
  return (
    <ScrollView style={{ marginTop: 30 }}>
      <TodoItems
        todos={props.todos}
        removeTodo={props.removeTodo}
        checkedTodo={props.checkedTodo}
      />
    </ScrollView>
  );
};

export default Todo;