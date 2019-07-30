import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated from "react-native-reanimated";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import runTiming from "util/animations/runTiming";
import { connect } from "react-redux";

const { interpolate, Clock, Extrapolate, concat } = Animated;

function NotificationsComponent(props) {
  const [trans, setTrans] = useState(-300);
  const [rotate, setRotate] = useState(-300);
  const scaleY = interpolate(trans, {
    inputRange: [-300, -50, 0],
    outputRange: [0, 0, 1],
    extrapolate: Extrapolate.CLAMP
  });
  const rotateInterpolate = interpolate(rotate, {
    inputRange: [0, 0.3, 0.7, 0.9, 1],
    outputRange: [-45, 45, -45, 0, 20],
    extrapolate: Extrapolate.CLAMP
  });
  const textFadeInterpolate = interpolate(rotate, {
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP
  });
  useEffect(() => {
    console.log("@props", props);
    if (props.notifications.payload) {
      setTrans(runTiming(new Clock(rotate), -300, 0, 750));
      setRotate(runTiming(new Clock(), 0, 1, 1750));
      setTimeout(() => {
        setTrans(runTiming(new Clock(), 0, -300, 750));
      }, 10500);
    }
  }, [props.notifications.payload]);
  return (
    <Animated.View
      style={[styles.container, { top: trans, transform: [{ scaleY }] }]}
    >
      <TouchableWithoutFeedback
        onPress={() => setTrans(runTiming(new Clock(), 0, -300, 750))}
      >
        <View style={styles.bar}>
          <Animated.View
            style={{
              transform: [{ rotate: concat(rotateInterpolate, "deg") }],
              opacity: textFadeInterpolate
            }}
          >
            <MaterialIcons name="bell-ring" size={19} color="#FFF" />
          </Animated.View>
          <View style={styles.textView}>
            {props.notifications.payload && (
              <Animated.Text
                style={[styles.barText, { opacity: textFadeInterpolate }]}
              >
                {props.notifications.payload.message}
              </Animated.Text>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    backgroundColor: "green"
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 11,
    flex: 1,
    width: "100%",
  },
  barText: {
    fontSize: 15,
    color: "#FFF",
    // paddingStart: 11,
    textAlign: "center",
    alignSelf: "center"
  },
  textView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingEnd: 30
  }
});

const mapProps = state => {
  return {
    notifications: state.notifications
  };
};

export default connect(
  mapProps,
  null
)(NotificationsComponent);
