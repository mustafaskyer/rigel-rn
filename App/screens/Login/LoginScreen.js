import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './LoginStyles';
import {connect} from 'react-redux';

function LoginScreen(props) {
  const [state, setState] = useState(null);
  useEffect(() => {
    /**  */
  });
  return (
    <View style={styles.container}>
      <Text>{'LoginScreen'}</Text>
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
export default connect(mapProps)(LoginScreen);
