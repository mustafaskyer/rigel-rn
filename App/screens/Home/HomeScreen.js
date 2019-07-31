import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./HomeStyles";
import { connect } from "react-redux";
// import MapBoxGl from 'modules/mapbox';
function HomeScreen(props) {
  const [state, setState] = useState(null);
  useEffect(() => {
    /**  */
  });
  return (
    <View style={styles.container}>
      {/* <MapBoxGl coords={[46.71473915, 24.75040361]} /> */}
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

/**
 * Example
 * <RenderIcon imgSource={cImg} title={'Logo'} coordinate={props.coords}/>
 */
export default connect(mapProps)(HomeScreen);
