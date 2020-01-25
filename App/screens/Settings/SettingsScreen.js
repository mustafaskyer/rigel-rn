import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './SettingsStyles';
import {connect} from 'react-redux';

function SettingsScreen(props) {
  const [state, setState] = useState(null);
  useEffect(() => {
    /**  */
  });
  return (
    <View style={styles.container}>
      <Text>{'SettingsScreen'}</Text>
    </View>
  );
}

/**
 * @param {any} state
 * @returns
 */
const mapProps = state => {
  return {};
};
export default connect(mapProps)(SettingsScreen);
