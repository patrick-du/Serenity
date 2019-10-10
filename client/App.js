import React, { Component } from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUpScreen from './components/Auth/SignUp';
import LoginScreen from './components/Auth/Login';

export default class App extends Component {
  state = {
    fontsAreLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),

      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),

      'Nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
      'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
      'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),

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
  SignUp: SignUpScreen, 
  Login: LoginScreen 
},
{ 
  initialRouteName: 'Login',
  headerMode: 'none',  
});

const AppContainer = createAppContainer(createSwitchNavigator({ 
  Auth: AuthStack,

},    
{ 
  initialRouteName: 'Auth', 
}));

