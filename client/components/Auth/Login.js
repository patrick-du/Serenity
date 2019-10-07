import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LoginScreen extends Component {
  
  onPressSignUp = () => {
    this.props.navigation.navigate('SignUp')  
  };

  onPressLogin = () => {
    this.props.navigation.navigate('Login')  
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Text style={styles.currentTab} onPress={this.onPressLogin}>Login</Text>
          <Text onPress={this.onPressSignUp}>Sign Up</Text>
        </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#23272A',
  },
  currentTab: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});
