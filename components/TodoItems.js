import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TodoItems = props => {
  return props.todos.map((todo, idx) => {
    return (
      <View style={styles.items} key={idx}>
        <Text style={styles.text}>{todo}</Text>
      </View>
    )
  });
}

const styles = StyleSheet.create({
  items: {    
    marginBottom: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default TodoItems;