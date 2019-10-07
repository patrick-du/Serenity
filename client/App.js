import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUpScreen from './components/Auth/SignUp';
import LoginScreen from './components/Auth/Login';

//import AuthLoadingScreen from './components/AuthLoading';

export default class App extends Component {
  render() {
    return <AppContainer />
  }
};

const AuthStack = createStackNavigator({
  SignUp: SignUpScreen, 
  Login: LoginScreen 
},
{ 
  initialRouteName: 'Login',
  
});

const AppContainer = createAppContainer(createSwitchNavigator({ 
  Auth: AuthStack ,
  //AuthLoading: AuthLoadingScreen
},    
{ 
  initialRouteName: 'Auth' 
}));

