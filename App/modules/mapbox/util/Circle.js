import React from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import * as turf from "@turf/turf";
import { View } from "react-native";

function renderCircle(props) {
  var center = props.coords;
  var radius = 5;
  var options = { steps: 10, units: "kilometers", properties: { foo: "bar" } };
  var circle = turf.circle(center, radius, options);
  return (
    <MapboxGL.ShapeSource id="pulseCircleSource" shape={circle}>
      <MapboxGL.CircleLayer
        id="pulseOuterCircle"
        style={outerCircleStyle}
      />
    </MapboxGL.ShapeSource>
  );
}

const outerCircleStyle = 
  {
    circleColor: "red",
    circleRadius: 11,
    circleOpacity: 0.4,
    circleStrokeColor: '#FFF',
    // circleStrokeWidth: 1,
  }

/**
 * Example
 * <Circle coords={props.coords}/>
 */
export default renderCircle;
