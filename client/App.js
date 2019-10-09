import React, { Component } from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoaderScreen from './components/Auth/Loader';
import WelcomeScreen from './components/Auth/Welcome';
import SignUpScreen from './components/Auth/SignUp';
import LoginScreen from './components/Auth/Login';

export default class App extends Component {
  state = {
    fontsAreLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({ fontsAreLoaded: true });
  }

  render() {
    if(!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return <AppContainer />
  }
};

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  SignUp: SignUpScreen, 
  Login: LoginScreen 
},
{ 
  initialRouteName: 'Welcome',
  headerMode: 'none',  
});

const AppContainer = createAppContainer(createSwitchNavigator({ 
  Auth: AuthStack,

},    
{ 
  initialRouteName: 'Auth', 
}));

