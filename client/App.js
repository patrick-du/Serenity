import React, { Component } from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUpScreen from './components/Screens/SignUp';
import LoginScreen from './components/Screens/Login';

import DashboardScreen from './components/Screens/Dashboard';
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


      'SFProDisplay-Light': require('./assets/fonts/SFProDisplay-Light.ttf'),
      'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
      'SFProDisplay-Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
      'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),

      'SFProDisplay-UltraLight': require('./assets/fonts/SFProDisplay-UltraLight.ttf'),



    });

    this.setState({ fontsAreLoaded: true });
  }

  render() {
    if (!this.state.fontsAreLoaded) {
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
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        backgroundColor: '#FAFAFC',
      },
      headerTintColor: '#95a5a6',
    }
  });

const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen,
},
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        backgroundColor: '#FAFAFC',
      },
      headerTintColor: '#95a5a6',
    }
  });


const AppContainer = createAppContainer(createSwitchNavigator({
  Auth: AuthStack,
  Dashboard: DashboardStack

},
  {
    initialRouteName: 'Auth',
  }));

