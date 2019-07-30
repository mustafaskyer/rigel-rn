import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./HomeStyles";
import { connect } from "react-redux";
function HomeScreen(props) {
  const [state, setState] = useState(null);
  useEffect(() => {
    /**  */
  });
  return (
    <View style={styles.container}>
      <Text>{'HomeScreen'}</Text>
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
export default connect(mapProps)(HomeScreen);
