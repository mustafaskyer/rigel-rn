import React, { useEffect } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated from "react-native-reanimated";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import runTiming from "util/animations/runTiming";
import { connect } from "react-redux";
import { clearNotifications } from "redux-actions";

const { interpolate, Clock, Extrapolate, concat, Value } = Animated;

class NComp extends React.Component {
  constructor(props) {
    super(props);
    this._watchClear = null;
    this.state = {
      trans: new Value(-300),
      rotate: new Value(0)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notifications.payload) {
      if (this.state.rotate === 0) {
        this.setState({
          trans: runTiming(new Clock(), 0, -300, 750)
        });
      }
      this.setState(
        {
          trans: runTiming(new Clock(this.state.rotate), -300, 0, 750),
          rotate: runTiming(new Clock(), 0, 1, 1750)
        },
        () => {
          this._watchClear = setTimeout(() => {
            this.setState({ trans: new Value(-300), rotate: new Value(0) });
          }, 5000);
        }
      );
    }
  }

  componentWillUpdate(props, state) {
    if (props.notifications.payload) {
      clearInterval(this._watchClear);
    }
  }

  componentWillUnmount() {
    this.props.clearNotifications();
  }
  render() {
    this.scaleY = interpolate(this.state.trans, {
      inputRange: [-300, -50, 0],
      outputRange: [0, 0, 1],
      extrapolate: Extrapolate.CLAMP
    });
    this.rotateInterpolate = interpolate(this.state.rotate, {
      inputRange: [0, 0.3, 0.7, 0.9, 1],
      outputRange: [-45, 45, -45, 0, 20],
      extrapolate: Extrapolate.CLAMP
    });
    this.textFadeInterpolate = interpolate(this.state.rotate, {
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: Extrapolate.CLAMP
    });
    return (
      <Animated.View
        style={[
          styles.container,
          { top: this.state.trans, transform: [{ scaleY: this.scaleY }] },
          this.props.notifications.payload &&
            this.props.notifications.payload.type === "error" && {
              backgroundColor: "red"
            }
        ]}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({ trans: runTiming(new Clock(), 0, -300, 750) });
          }}
        >
          <View style={styles.bar}>
            <Animated.View
              style={{
                transform: [{ rotate: concat(this.rotateInterpolate, "deg") }],
                opacity: this.textFadeInterpolate
              }}
            >
              <MaterialIcons name="bell-ring" size={19} color="#FFF" />
            </Animated.View>
            <View style={styles.textView}>
              {this.props.notifications.payload && (
                <Animated.Text
                  style={[
                    styles.barText,
                    { opacity: this.textFadeInterpolate }
                  ]}
                >
                  {this.props.notifications.payload.message}
                </Animated.Text>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
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
    width: "100%"
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
  { clearNotifications }
)(NComp);
