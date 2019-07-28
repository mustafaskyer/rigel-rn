import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navigator from "./AppNavigation";
import {
  useAppState,
  useGeolocation,
  useNetInfo
} from "react-native-hooks";
import { appStateAction } from "redux-actions";

const Nav = props => {
  const currentAppState = useAppState();
  const [position] = useGeolocation();
  const netInfo = useNetInfo();

  useEffect(() => {
    props.appStateAction({
      appState: currentAppState,
      netInfo,
      position,
    });
  });

  return <Navigator {...props} />;
};

export default connect(
  null,
  { appStateAction }
)(Nav);
