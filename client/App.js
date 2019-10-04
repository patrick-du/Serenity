import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi there!</Text>
        <Text>Let's get started</Text>
        <TouchableHighlight style={styles.signUpBtn} onPress={this.onPress}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.signInBtn} onPress={this.onPress}>
          <Text style={styles.signInText}>Already have an account? Sign in</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#fff',
  },
  signUpBtn: {
    marginTop: 400,
    backgroundColor: '#2ecc71',
    borderWidth: 1,
    borderColor: '#2ecc71',
    padding: 15,
    borderRadius: 10 
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  signInBtn: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2ecc71',
    padding: 15,
    borderRadius: 10 
  },
  signInText: {
    color: '#2ecc71',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
