import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';

const TodoItems = props => {
  return props.todos.map(todo => {
    return (
      <View style={styles.items} key={todo.id}>
        <View style={styles.leftSide}>
          <CheckBox
            checked={todo.isFinished}
            onPress={() => props.checkedTodo(todo.id)}
          />
          <Text style={styles.text}>{todo.name}</Text>
        </View>
        <View
          style={styles.rightSide}> 
          <Icon
            name="md-trash"
            size={25}
            color="red"
            onPress={() => props.removeTodo(todo.id)}
          />
        </View>
      </View>
    )
  });
}

const styles = StyleSheet.create({
  items: {    
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
  },
  text: {
    fontSize: 15,
  },
  leftSide: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSide: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default TodoItems;