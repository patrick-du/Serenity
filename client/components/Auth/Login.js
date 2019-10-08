import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, StatusBar } from 'react-native';
import { View, Examples } from '@shoutem/ui';

export default class LoginScreen extends Component {
  
  onPressSignUp = () => {
    this.props.navigation.navigate('SignUp')  
  };

  onPressLogin = () => {
    this.props.navigation.navigate('Login')  
  };

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
    }).then (response => {
      console.log(response)
    }, error => {
      console.log(error)
    }
    /*
    ).then (function(response){
      console.log(response.status);
    }, function(error) {
      console.log(error)
      console.log('hi')
    }*/
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Examples/>
        <StatusBar barStyle="default" hidden={false} />
        <Text>
          <Text style={styles.currentTab} onPress={this.onPressLogin}>Login</Text>
          <Text onPress={this.onPressSignUp}>Sign Up</Text>
        </Text>
        <TouchableHighlight onPress={this.fetchTest}><Text>API Test</Text></TouchableHighlight>
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
