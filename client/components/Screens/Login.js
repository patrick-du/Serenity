import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Button } from 'react-native';

import AuthHeader from '../AuthHeader';
import AuthTextInput from '../AuthTextInput';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  
  onPressSignUp = () => {
    this.props.navigation.navigate('SignUp')
  };

  onPressLogin = () => {
    this.props.navigation.navigate('Login')
  };

  render() {
    return (
      <View style={styles.container}>

        {/* Title and Logo */}
        <AuthHeader title='Welcome back!' subtitle='Login to your account' />

        {/* Input Fields*/}
        <View style={{ marginVertical: 40 }}>

          {/* Email Field */}
          <View style={{ marginVertical: 10 }}>
            <AuthTextInput fieldTitle='Email' value={this.state.email} onChangeT={(email) => this.setState({ email })} onSubmitT={() => this.passwordRef.focus()} autoCap='none' />
          </View>

          {/* Password Field */}
          <View style={{ marginVertical: 10 }}>
            <AuthTextInput fieldTitle='Password' returnKeyT='done' value={this.state.password} onChangeT={(password) => this.setState({ password })} secureT={true} refTo={passwordRef => this.passwordRef = passwordRef} />
          </View>
          <Text style={styles.subTextRight}>Forgot Password?</Text>
        </View>

        {/* Register and Login Buttons */}
        <View style={{ marginVertical: 30 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText} onPress={this.onPressSignUp}>Login</Text>
            </TouchableHighlight>
          </View>
          <TouchableOpacity>
            <Text style={styles.subTextCenter}>
              Create account? <Text style={{ color: '#7268C9' }} onPress={this.onPressSignUp}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 45,
    backgroundColor: '#FAFAFC', // basically white colour
  },

  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 30,
    color: '#343340',
  },

  subTitle: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 16,
    color: '#95a5a6', // light grey colour
    marginVertical: 10,
  },

  inputTitle: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 14,
    color: '#95a5a6', // light grey colour
    marginBottom: 5,
  },

  input: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 18,
    width: '100%',
    color: '#343340', // dark navy colour
    borderBottomWidth: 1,
    borderBottomColor: '#95a5a6' // light grey colour
  },

  button: {
    backgroundColor: '#7268C9', // purple colour
    width: '100%',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 16,
    color: '#FAFAFC', // basically white colour
  },

  subTextRight: {
    color: '#95a5a6', // light grey colour
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 14,
    textAlign: 'right'
  },

  subTextCenter: {
    color: '#95a5a6', // light grey colour
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 14,
    textAlign: 'center'
  }

})

