import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Navigator from "./AppNavigation";
import { useAppState, useNetInfo, useGeolocation } from "react-native-hooks";
import { ifIphoneX } from "react-native-iphone-x-helper";
import { appStateAction } from "redux-actions";
// import permissions from 'util/permissions';


// permissions.check('storage').then(r => console.log('@r', r))
const Nav = props => {
    const currentAppState = useAppState();
    const netInfo = useNetInfo();
    const [position] = useGeolocation()
    
    useEffect(() => {
    props.appStateAction({
      appState: currentAppState,
      netInfo,
      position
    });
  });

  return (
    <View style={styles.view}>
      <Navigator {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
    view: {
      flex: 1,
      ...ifIphoneX({
        paddingTop: 44,
        paddingBottom: 34
      })
    }
  });

export default connect(
  null,
  { appStateAction }
)(Nav);
