import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

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

  onPressLogin = () => {
    this.props.navigation.navigate('Login')
  };
  
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

        {/* Title and Logo */}
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subTitle}>Create your new account</Text>

        {/* Input Fields*/}
        <View style={{ marginVertical: 40 }}>
          {/* Name Field */}
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.inputTitle}>Name</Text>
            <TextInput
              style={styles.input}
              returnKeyType='next'
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              onSubmitEditing={() => this.emailRef.focus()}
            />
          </View>

          {/* Email Field */}
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={styles.input}
              returnKeyType='next'
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              autoCapitalize={false}
              ref={emailRef => this.emailRef = emailRef}
              onSubmitEditing={() => this.passwordRef.focus()}
            />
          </View>

          {/* Password Field */}
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              returnKeyType='next'
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              autoCorrect={false}
              secureTextEntry={true}
              ref={passwordRef => this.passwordRef = passwordRef}
              onSubmitEditing={() => this.password2Ref.focus()}

            />
          </View>

          {/* Password2 Field */}
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.inputTitle}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              returnKeyType='done'
              onChangeText={(password2) => this.setState({ password2 })}
              value={this.state.password2}
              autoCorrect={false}
              secureTextEntry={true}
              ref={password2Ref => this.password2Ref = password2Ref}
            />
          </View>
        </View>
        
        {/* Register and Login Buttons */}
        <View style={{ marginVertical: 30 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText} onPress={this.onPressSignUp}>Sign Up</Text>
            </TouchableHighlight>
          </View>
          <TouchableOpacity>
            <Text style={styles.subTextCenter}>
              Already have an account? <Text style={{ color: '#389EF6' }} onPress={this.onPressLogin}>Login</Text>
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
    paddingVertical: 130,
    paddingHorizontal: 45,
    backgroundColor: '#FAFAFC', // basically white colour
  },

  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 30,
    color: '#343340', // dark navy colour
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
    backgroundColor: '#389EF6', // blue colour
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


