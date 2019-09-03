import React from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import * as turf from "@turf/turf";
import useDirection from "./mapbox";

function renderLine({ origin, dest, color, width, opacity }) {
  const [res] = useDirection({ origin, dest });
  const coordinatesLine = res && turf.lineString(res.coordinates, { name: "line 1" }) || {};
  return(
    <MapboxGL.ShapeSource id="routeSource" shape={coordinatesLine}>
      <MapboxGL.LineLayer
        id="routeFill"
        style={{
            lineColor: color,
            lineCap: MapboxGL.LineJoin.Round,
            lineWidth: width,
            lineOpacity: opacity
          }}
      />
    </MapboxGL.ShapeSource>
  );
}

/**
 * Example 
 * <Line color={'red'} width={5} opacity={1} origin={[46.6014027, 24.7458161]} dest={[46.420986, 24.8032532]} />
 */
export default renderLine;
