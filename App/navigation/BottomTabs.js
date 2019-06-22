import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from 'react-redux';

const BottomTabs = () => {
    return <View style={styles.container} />
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
    borderRadius: 23,
    backgroundColor: "red",
    opacity: 1,
    zIndex: 999,
    paddingBottom: 19
  }
});
