import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
function HeaderAwayComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ixCase} />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BF4C58',
    width: '100%',
    height: Platform.OS === 'android' ? 90 : 132,
    paddingTop: Platform.OS !== 'android' ? getStatusBarHeight() : 0,
  },
  ixCase: {
    //   height: getStatusBarHeight()
  },
});

export default HeaderAwayComponent;
