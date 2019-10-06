import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';

import generateId from '../helpers/genId';

export class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.todo.name,
    }
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.todo.name !== this.props.todo.name) {
      this.setState({ name: this.props.todo.name });
    }
  }

  handleSubmit() {
    if (!this.props.isEdit) {
      const newTodo = {
        id: generateId(5),
        name: this.state.name,
        isFinished: this.props.todo.isFinished,
      };
  
      // send function to parents
      this.props.addTodo(newTodo);
    } else {
      const updateTodo = {
        id: this.props.todo.id,
        name: this.state.name,
        isFinished: this.props.todo.isFinished,
      }

      this.props.updateNewTodo(updateTodo);
    }

    // clear state name
    this.setState({ name: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={(input) => this.setState({ name: input })}
          placeholder="Add new Todo"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
        >
          {
            this.props.isEdit ? <Text style={styles.text}>Edit</Text> : <Text style={styles.text}>Add</Text>
          }
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#CACACA',
    marginRight: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AddTodo;
