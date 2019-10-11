import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator, createSwitchNavigator
} from "react-navigation";
import {
  createStackNavigator
} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import navConfigs from "./config";
import mainConfig from 'config';
// #Splash Screen (Later ✋)
import Index from "root/Index";

import Drawer from "./Drawer";
import BottomTabComponent from "./BottomTabs";
import { auth, reistered } from "screens/";

/** Auth Screens */
const Auth = createStackNavigator({...auth},navConfigs.options);

/** Registered Screens */
const Registered = createStackNavigator({...reistered},navConfigs.options);


/** Drawer Screens */

  const DrawerScreens = createDrawerNavigator({...reistered},{
    contentComponent: props => <Drawer {...props} />,
    ...navConfigs.drawerOptions
  }
);

/** Tabs */
// const BottomTabs = createBottomTabNavigator({ Drawer: { screen: DrawerScreens }},
//   {
//     ...navConfigs.tabsOptions,
//     tabBarComponent: () => <BottomTabComponent />
//   }
// );
const stackNavigator = createSwitchNavigator(
  {
    DrawerScreens,
    Registered,
    Auth
  },
  navConfigs.stackOptions
);

export default createAppContainer(stackNavigator);
