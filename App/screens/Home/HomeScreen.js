import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./HomeStyles";
import { connect } from "react-redux";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
    "pk.eyJ1IjoibXNreWVyIiwiYSI6ImNqdGtqbzQ2aTFzM2Q0M214NHZncjgzcDQifQ.exxYX1gVmOJo5k1W2R-NbQ"
  );
function HomeScreen(props) {
  const [state, setState] = useState(null);
  useEffect(() => {
    /**  */
  });
  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Street}
        style={{ flex: 1, width: '100%', height: '100%' }}
      >
        <MapboxGL.Camera followZoomLevel={12} followUserLocation />

        <MapboxGL.UserLocation onPress={r=>console.log('@r',r)} />
      </MapboxGL.MapView>
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
