import React from 'react';
import { createAppContainer, createStackNavigator , createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import {  createFluidNavigator } from 'react-navigation-fluid-transitions';
import { 
  Login,
  UserDetail
} from 'screens/index';

// works like a splash screen
import Index from 'root/Index';
import Drawer from './Drawer';
import BottomTabComponent from './BottomTabs';

// Auth Screens
const AuthScreens = createFluidNavigator({
  Login,
})

const FluidT = createStackNavigator({
  Home: {
    screen: Index,
  },
  Login: {
    screen: Login,
  },
  Detail: {
    screen: UserDetail
  }
},{
  headerMode: 'float'
})

// Drawer
const UserScreensWithDrawerContainer = createDrawerNavigator({
  ...BottomTabs,
  FluidT
},{
  contentComponent: props => <Drawer {...props} />,
  drawerBackgroundColor: '#FFF',
  drawerType: 'front',
  overlayColor: '#FFF',
  // drawerLockMode: 'unlocked',
  drawerWidth: 300,
});


// bottom tabs
const BottomTabs = createBottomTabNavigator({
  Drawer:{ screen: UserScreensWithDrawerContainer }
 },{
   tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style:{
      borderWidth:1
    }
  },
  tabBarComponent: () => <BottomTabComponent />
 })

// stackNavigatorOptions & stackNavigator
const stackNavOptions = {
  navigationOptions: { 
    gesturesEnabled: false,
   },
  initialRouteName: 'BottomTabs',
}
const stackNavigator = 
createSwitchNavigator({
    Index,
    AuthScreens,
    UserScreensWithDrawerContainer,
    BottomTabs
  },stackNavOptions)
  
  // hoc stackNavigator
  export default createAppContainer(stackNavigator)
