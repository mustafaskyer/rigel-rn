import React from 'react';
import {  createFluidNavigator } from 'react-navigation-fluid-transitions';

import Login from '../screens/Login/index';
import LoginForm from '../screens/Login/Form';
import Home from '../screens/Home/index';

const Navigator = createFluidNavigator({
  Login: { screen: Login },
  LoginForm: { screen: LoginForm },
  Home: { screen: Home }

}, {
  navigationOptions: { gesturesEnabled: false },
  initialRouteName: 'Login'
});

class SharedElements extends React.Component {
  static router = Navigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <Navigator navigation={navigation} />
    );
  }
}

export default SharedElements;