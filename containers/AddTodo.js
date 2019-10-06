import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

export class AddTodo extends Component {

  state = {
    id: 1,
    name: '',
  }

  handleText(input) {
    this.setState({ name: input });
  }

  handleSubmit() {
    const newTodo = {
      id: this.state.id,
      name: this.state.name,
      isFinished: false,
    };

    this.props.addTodo(newTodo);

    this.setState({
      id: this.state.id + 1,
      name: ''
    });
  }

  render() {
    let { name } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={this.handleText.bind(this)}
          placeholder="Add new Todo"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.text}>Add</Text>
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
  }
});

export default AddTodo;
