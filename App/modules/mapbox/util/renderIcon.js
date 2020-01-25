import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const ANNOTATION_SIZE = 45;

function ShowPointAnnotation({coordinate, imgSource, imgUrl, title}) {
  const img = imgUrl ? {uri: imgUrl} : imgSource ? imgSource : null;
  return (
    <MapboxGL.PointAnnotation
      key={Date.now()}
      id={Date.now()}
      coordinate={coordinate}
      title={'title'}>
      <View style={styles.annotationContainer}>
        <Image source={img} style={{flex: 1, resizeMode: 'contain'}} />
      </View>
      <MapboxGL.Callout title={title} />
    </MapboxGL.PointAnnotation>
  );
}

export default ShowPointAnnotation;
const styles = StyleSheet.create({
  annotationContainer: {
    width: ANNOTATION_SIZE,
    height: ANNOTATION_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: ANNOTATION_SIZE / 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.45)',
  },
  annotationFill: {
    width: ANNOTATION_SIZE - 3,
    height: ANNOTATION_SIZE - 3,
    borderRadius: (ANNOTATION_SIZE - 3) / 2,
    backgroundColor: 'orange',
    transform: [{scale: 0.6}],
  },
});
