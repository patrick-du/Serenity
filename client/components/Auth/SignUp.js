import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
    };
  }

  signup = () => {
    fetch('http://ptvs2.com/t/fetch/post', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      }),
    }).then(
      response => console.log(response),
      error => console.log(error)
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          placeholder="Confirm Password"
          onChangeText={(password2) => this.setState({ password2 })}
          value={this.state.password2}
        />
        <TouchableOpacity onPress={this.signup}><Text>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 50,
    backgroundColor: '#F6F8FA', // basically white colour
  },
});
