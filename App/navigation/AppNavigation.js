import React from 'react';
import { View } from 'react-native';
import {  createFluidNavigator } from 'react-navigation-fluid-transitions';
import { createStackNavigator, createBottomTabNavigator, NavigationComponent } from 'react-navigation';
import Login from '../screens/Login/index';
import LoginForm from '../screens/Login/Form';
import Home from '../screens/Home/index';
import BottomNavTabs from './BottomNavTabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Bottom1 = () => <View style={{ flex:1, backgroundColor:'#388E3C' }}></View>
const Bottom2 = () => <View style={{ flex:1, backgroundColor:'#B71C1C' }}></View>
const BottomTabs = createBottomTabNavigator({
  Login: {
    screen: Bottom1,
    navigationOptions:{
      tabBarLabel: 'Login',
      tabBarIcon: <Icon size={24} color="white" name={'list'} />
    }
  },
  LoginForm: {
    screen: Bottom2,
    navigationOptions:{
      tabBarLabel: 'Login Form',
      tabBarIcon: <Icon size={24} color="white" name={'movie'} />
    }
  },
  Home: {
    screen: Home,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: <Icon size={24} color="white" name={'list'} />
    }
  }
},{
  tabBarComponent: props => <BottomNavTabs {...props} />,
  initialRouteName: 'Home'
})

const Navigator = createFluidNavigator({
  Login: { screen: Login },
  LoginForm: { screen: LoginForm },
  Home: BottomTabs
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