import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { getBottomSpace } from 'react-native-iphone-x-helper';

function ButtonComponent(props) {
  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
      {
        props.loading 
        ? <ActivityIndicator color={props.spinnerColor} size={props.spinnerSize} />
        : <Text style={styles.btnText}>{props.title}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BF4C58",
    minWidth: '100%',
    height: 55 + getBottomSpace()/3 ,
    paddingBottom:  getBottomSpace()/3,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    textAlign: "center"
  }
});

export default ButtonComponent;
