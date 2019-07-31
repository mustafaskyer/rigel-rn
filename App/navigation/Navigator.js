import React, { useEffect } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";
import Navigator from "./AppNavigation";
import { useAppState } from "react-native-hooks";
import { ifIphoneX } from "react-native-iphone-x-helper";
import { appStateAction } from "redux-actions";
import NotificationsComponent from 'components/NotificationsComponent';
import { addNotification } from 'redux-actions';
// import permissions from 'util/permissions';

// permissions.check('storage').then(r => console.log('@r', r))
const Nav = props => {
  const currentAppState = useAppState();

  useEffect(() => {
    props.appStateAction({
      appState: currentAppState,
      plaform: Platform.OS
    });
    setTimeout(() => {
      // props.addNotification({ message: 'Welcome there , it works ' })
    }, 1000)
    
  });

  return (
    <View style={styles.view}>
      <View style={styles.notificationBar}>
      <NotificationsComponent />
      </View>
      <Navigator {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    ...ifIphoneX({
      paddingTop: 35,
      // paddingBottom: 19
    })
  },
  notificationBar: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    ...ifIphoneX({
      paddingTop: 35,
    },{
      paddingTop: Platform.OS === 'android' ? 0 : 19
    })
  }
});

export default connect(
  null,
  { appStateAction, addNotification }
)(Nav);
