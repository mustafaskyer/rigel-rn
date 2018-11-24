import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, Button, StyleSheet, Dimensions } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { Transition } from 'react-navigation-fluid-transitions';
let {
    Value,
    block,
    timing,
    Clock,
    debug,
    clockRunning,
    stopClock,
    startClock,
    interpolate,
    Extrapolate,
    cond,
    set,
    concat
} = Animated
//@image
import logo from '../../assets/imgs/cloud.png';

import styles from './styles';

function runTiming(clock, value, dest){
    const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
    }
    const config = {
    duration: 1250,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
    }
    return block([
        cond(clockRunning(clock), 0, [
          set(state.finished, 0),
          set(state.time, 0),
          set(state.position, value),
          set(state.frameTime, 0),
          set(config.toValue, dest),
          startClock(clock),
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position,
      ]);
}
export default class Loginn extends Component {
  constructor(props) {
    super(props);
    let imageClock = runTiming(new Clock(), 0, 2)
    let imageInterpolate = interpolate(imageClock,{
        inputRange:[0,1],
        outputRange:[-30, 0],
        extrapolate: Extrapolate.CLAMP
    });
    let scaleInterpolate = interpolate(imageClock,{
        inputRange:[0,1],
        outputRange:[0, 1],
        extrapolate: Extrapolate.CLAMP
    });
    let imageRotateInterpolate = interpolate(imageClock,{
        inputRange:[0,1],
        outputRange:[concat('3','rad'), concat('0','rad')],
        extrapolate: Extrapolate.CLAMP
    });
    let textInterpolate = interpolate(imageClock,{
        inputRange:[1, 1.7, 2],
        outputRange:[-40, -40,  0],
        extrapolate: Extrapolate.CLAMP
    });
    let textScaleInterpolate = interpolate(imageClock,{
        inputRange:[1, 1.7, 2],
        outputRange:[0, 0, 1],
        extrapolate: Extrapolate.CLAMP
    });
    this._imageStyle = {
        transform:[{translateX: imageInterpolate},{rotate:imageRotateInterpolate}]
    }
    this._textStyle = {
        transform:[{translateX: textInterpolate},{scale: textScaleInterpolate}]
    }
  }

  componentDidMount(){
    setTimeout(
        () => this.props.navigation.navigate('LoginForm'),
        1500
    )
  };
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screen2}>
        <Transition shared="circle">
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('screen2')}
                style={styles.imgContainer}
                >
                <Animated.Image style={[styles.img, this._imageStyle]} source={logo} />
                <Animated.Text style={[styles.title, this._textStyle]}>Fly in The Sky</Animated.Text>
                </TouchableOpacity>
        </Transition>
        </View>
      </View>
    );
  }
}
