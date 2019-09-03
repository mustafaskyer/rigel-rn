import React from "react";
import { View } from "react-native";

function SpacerComponent({ height, width }) {
  return <View style={{ marginTop: height, marginStart: width }} />;
}

export default SpacerComponent;
