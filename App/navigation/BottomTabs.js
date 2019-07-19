import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from 'react-redux';

const BottomTabs = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.tabText}>Home</Text>
        <Text style={styles.tabText}>Settings</Text>
        <Text style={styles.tabText}>Chat</Text>
        <Text style={styles.tabText}>Profile</Text>
      </View>
    )
}

const mapProps = state => {
    return {
        badges: state.badges,
        // all other state reducers ❤️
    }
}
export default connect(mapProps)(BottomTabs)

const styles = StyleSheet.create({
  container: {
    height: 60,
    // borderRadius: 23,
    backgroundColor: "red",
    opacity: 1,
    zIndex: 999,
    paddingBottom: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  }
});
