import React, { useEffect } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";
import Navigator from "./AppNavigation";
import { useAppState } from "react-native-hooks";
import { ifIphoneX } from "react-native-iphone-x-helper";
import { appStateAction } from "redux-actions";
import NotificationsComponent from 'components/NotificationsComponent';
// import permissions from 'util/permissions';

// permissions.check('storage').then(r => console.log('@r', r))
const Nav = props => {
  const currentAppState = useAppState();

  useEffect(() => {
    props.appStateAction({
      appState: currentAppState,
      plaform: Platform.OS
    });
    
  });

  return (
    <View style={styles.view}>
      <NotificationsComponent />
      <Navigator {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    ...ifIphoneX({
      paddingTop: 35,
      paddingBottom: 19
    })
  }
});

export default connect(
  null,
  { appStateAction }
)(Nav);
