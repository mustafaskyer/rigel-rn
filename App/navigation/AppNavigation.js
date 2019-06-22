import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {  createFluidNavigator } from 'react-navigation-fluid-transitions';
import { 
  Login
} from 'screens/index';
import Index from 'root/Index';

// stackNavigatorOptions & stackNavigator
const stackNavOptions = {
  navigationOptions: { gesturesEnabled: false },
  initialRouteName: 'Index'
}
const stackNavigator = 
  createStackNavigator({
    Index,
    Login,
    // ... others screens
  },stackNavOptions)
  
  // hoc stackNavigator
  const Navigator = createAppContainer(stackNavigator)



const SharedElements = ({navigation}) => <Navigator navigation={navigation} />

export default SharedElements;