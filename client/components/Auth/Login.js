import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Screen, View, Examples, NavigationBar, Title, Icon } from '@shoutem/ui';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  };

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
    }).then(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  };

  render() {
    return (
      <Screen>
        <View>
          {/*<NavigationBar
          leftComponent={<Icon name="sidebar" />}
          centerComponent={<Title>SERENITY</Title>}
        /> */}
        
        </View>
        <Text>
          <Text style={styles.currentTab} onPress={this.onPressLogin}>Login</Text>
          <Text onPress={this.onPressSignUp}>Sign Up</Text>
        </Text>
        <TouchableHighlight onPress={this.fetchTest}><Text>API Test</Text></TouchableHighlight>


      </Screen>

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
