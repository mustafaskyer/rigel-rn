import React from 'react';
import { View } from 'react-native';
import {  createFluidNavigator } from 'react-navigation-fluid-transitions';
import { createBottomTabNavigator } from 'react-navigation';
import Login from '../screens/Login/index';
import LoginForm from '../screens/Login/Form';
import Home from '../screens/Home/index';
import BottomNavTabs from './BottomNavTabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Bottom1 = () => <View style={{ flex:1, backgroundColor:'#388E3C' }}></View>
const Bottom2 = () => <View style={{ flex:1, backgroundColor:'#B71C1C' }}></View>
const Search = () => <View style={{ flex:1, backgroundColor:'#B71C1C' }}></View>
const Notifications = () => <View style={{ flex:1, backgroundColor:'#B71C1C' }}></View>
const Likes = () => <View style={{ flex:1, backgroundColor:'#B71C1C' }}></View>
const Profile = () => <View style={{ flex:1, backgroundColor:'#B71C1C' }}></View>


const BottomTabs = createBottomTabNavigator({
  Home: { screen: Home },
  Search: { screen: Search },
  Notifications: { screen: Notifications },
  Likes: { screen: Likes },
  Profile: { screen: Profile },
},{
  tabBarComponent: props => <BottomNavTabs {...props} />,
})

const Navigator = createFluidNavigator({
  Login: { screen: Login },
  LoginForm: { screen: LoginForm },
  Home: BottomTabs
}, {
  navigationOptions: { gesturesEnabled: false },
  initialRouteName: 'Home'
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