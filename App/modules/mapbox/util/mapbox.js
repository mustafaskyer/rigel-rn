import React, { useState, useEffect } from 'react';
import Mapbox from "mapbox";
const Client = new Mapbox(
  "pk.eyJ1IjoibXNreWVyIiwiYSI6ImNqdGtqbzQ2aTFzM2Q0M214NHZncjgzcDQifQ.exxYX1gVmOJo5k1W2R-NbQ"
);
export default function useDirections({ origin, dest }){
  const [res, updateRes] = useState(null)
      useEffect(async() => {
      const _res = await Client.getDirections([{ latitude: origin[1], longitude: origin[0] }, { latitude: dest[1], longitude:dest[0] }], {
        profile: "driving",
        geometry: "polyline"
      });
      const {
        geometry: {coordinates},
        distance,
        duration,
        legs
      } = _res.entity.routes[0]
      updateRes({coordinates, distance, duration, legs: legs[0] })
    },[])
    return [res]
}