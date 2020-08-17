import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {connect} from 'react-redux';

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tabText}>Home</Text>
      <Text style={styles.tabText}>Settings</Text>
      <Text style={styles.tabText}>Chat</Text>
      <Text style={styles.tabText}>Profile</Text>
    </View>
  );
};

const mapProps = state => {
  return {
    badges: state.badges,
    // all other state reducers ❤️
  };
};
export default connect(mapProps)(BottomTabs);

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'android' ? 60 : 70,
    // borderRadius: 23,
    backgroundColor: 'red',
    opacity: 1,
    zIndex: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: Platform.OS === 'android' ? 0 : 19,
  },
  tabText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
