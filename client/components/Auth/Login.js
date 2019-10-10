import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    console.log(this.state.email);
    console.log(this.state.password);
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
        <Text style={styles.title}>Serenity</Text>
        <Image style={styles.logo} source={require('../../assets/apple-logo.png')} />

        {/* Email Input Field */}
        <View style={{ marginVertical: 10, width: '100%' }}>
          <Text style={styles.inputTitle}>EMAIL</Text>
          <TextInput
            style={styles.input}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            autoCapitalize="none"
          />
        </View>

        {/* Password Input Field */}
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.inputTitle}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>

        {/* Register and Login Buttons */}
        <View style={{ marginVertical: 20 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.onPressSignUp}>Login Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.onPressSignUp}>Create Account</Text>
          </TouchableOpacity>
          <Text style={styles.subText}>Forgot Password?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 70,
    backgroundColor: '#F6F8FA', // basically white colour
  },

  title: {
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 30,
    color: '#343340',
  },

  logo: {
    width: 200,
    height: 200,
    marginVertical: 60,
  },

  inputTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    color: '#95a5a6', // light grey colour
    marginBottom: 5,
  },

  input: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    width: '100%',
    color: '#343340', // dark navy colour
    borderBottomWidth: 1,
    borderBottomColor: '#95a5a6' // light grey colour
  },

  button: {
    backgroundColor: '#389EF6', // blue colour
    width: 250,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: '#F6F8FA', // basically white colour
  },

  subText: {
    textAlign: 'center',
    color: '#95a5a6', // light grey colour
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12
  }

})

