import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',      
    }
  }

  test = () => {
    console.log(this.state.email);
    console.log('hi');
    console.log(this.state.password);
  }

  fetchTest = () => {
    fetch('http://ptsv2.com/t/fetch/post', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        name: 'fetch',
        email: 'fetch@gmail.com',
        password: 'test123',
        password2: 'test123'
      }),
    }).then(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  };

  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          onchangeText={(text) => {this.setState({text})}}
          value={this.state.text}
        />
        {/* <TextInput
          placeholder="Password"
          onchangeText={(text) => {this.setState({password: text})}}
          value={this.state.text}
        /> */}
        <TouchableOpacity onPress={this.test}><Text>HiHsdHI</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    //backgroundColor: '#23272A',
  },
  currentTab: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});
