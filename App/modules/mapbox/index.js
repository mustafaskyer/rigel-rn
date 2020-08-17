import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import useGeolocation from 'util/useGeolocation';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibXNreWVyIiwiYSI6ImNqdGtqbzQ2aTFzM2Q0M214NHZncjgzcDQifQ.exxYX1gVmOJo5k1W2R-NbQ',
);

export default function MapView(props) {
  const [position] = useGeolocation();
  const [flyTo, setFlyTo] = useState(null);
  useEffect(() => {
    /**
     * Handle FlyTo
     */
    setFlyTo(props.coords);
  }, [props.coords]);
  return (
    <View
      style={styles.container}
      pointerEvents={props.disabled ? 'none' : 'auto'}>
      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Street}
        style={styles.container}>
        <MapboxGL.Camera
          followZoomLevel={17}
          zoomLevel={15}
          followUserLocation={!flyTo}
          animationMode={'flyTo'}
          animationDuration={1000}
          centerCoordinate={flyTo}
        />
        <MapboxGL.UserLocation onPress={r => console.log('@r', r)} />
      </MapboxGL.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, width: '100%', height: '100%'},
});
