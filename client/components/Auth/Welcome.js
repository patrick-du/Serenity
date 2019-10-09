import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class WelcomeScreen extends Component {

  onPressSignUp = () => {
    this.props.navigation.navigate('SignUp')
  };

  onPressLogin = () => {
    this.props.navigation.navigate('Login')
  };

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.logo}>SerenityLogo</Text>
          <Text style={styles.title}>Let's get started!</Text>
          <Text style={styles.subtitle}>Create an account to continue. We don't sell or share your data with anyone.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.onPressSignUp}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.lineStyle}/>
          <Text style={styles.subtitle}>You don't have an account? <Text style={{color: '#778beb', fontFamily: 'OpenSans-SemiBold'}} onPress={this.onPressLogin}>Sign up here</Text></Text>
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
  logo: {
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 30,
    color: '#5C5B6F', // dark navy colour
    marginTop: 80
  },
  title: {
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 30,
    color: '#5C5B6F', // dark navy colour
    marginTop: 80,
    marginBottom: 15,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    color: '#95a5a6', // light grey colour
  },
  button: {
    backgroundColor: '#778beb', // purple blue colour
    padding: 10,
    marginTop: 60,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
    color: '#F6F8FA', // basically white colour
  },
  lineStyle: {
    marginVertical: 20,
    borderWidth: 0.3,
    borderColor: '#95a5a6',
  },
  

})

