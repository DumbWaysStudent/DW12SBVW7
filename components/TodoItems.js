import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const TodoItems = props => {
  return props.todos.map(todo => {
    return (
      <View style={styles.items} key={todo.id}>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <Text style={styles.text}>{todo.name}</Text>
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TodoItems;