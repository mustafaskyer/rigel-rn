import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
  Animated,
} from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Input, Button, CapFirstLetter } from "../../components/index";

import logo from "../../assets/imgs/cloud.png";
import styles from "./styles";

const { width } = Dimensions.get("window");

const runInterpolate = (animation, index) => {
  let inputRange = [0, 1];
  let outputRange = [width * index, 0];
  let interpolateValue = animation.interpolate({
    inputRange,
    outputRange,
    extrapolate: "clamp"
  });
  return {
    transform: [{ translateX: interpolateValue }],
    opacity: animation
  };
};

runTiming = (animation, toValue, duration) => {
  return Animated.timing(animation, {
    toValue,
    duration
  });
};

export default class Form extends Component {
  state = {
    animation: new Animated.Value(0),
    btnAnimation: new Animated.Value(0),
    sepratorAnimation: new Animated.Value(0)
  };

  componentDidMount() {
    setTimeout(() => {
      Animated.parallel([
        runTiming(this.state.animation, 1, 1000),
        runTiming(this.state.btnAnimation, 1, 1500),
        runTiming(this.state.sepratorAnimation, 1, 1750)
      ]).start();
    }, 350);
  }
  render() {
    let styleInput1 = runInterpolate(this.state.animation, 1);
    let styleInput2 = runInterpolate(this.state.animation, 2);
    let animatedBtnStyle = runInterpolate(this.state.btnAnimation, 1);
    let animatedSeprator = runInterpolate(this.state.sepratorAnimation, 1);

    return (
      <View style={styles.container}>
        <View style={[styles.screen1, { top: 40 }]}>
          <Transition shared="circle">
            <View style={styles.imgContainer}>
              <Image style={[styles.img]} source={logo} />
              <Text style={[styles.title, { color: "#55bbff", textAlign:'center' }]}>
                Welcome 
              </Text>
            </View>
          </Transition>

          <ScrollView style={{ height: 200, }}>
            <View
              style={{
                marginTop: 45,
                height: 150,
                width: 300,
                flex: 1,
                justifyContent: "space-around"
              }}
            >
              <Animated.View style={[{ flex: 1 }, styleInput1]}>
                <Input
                  icon={{
                    name: "md-mail",
                    size: 22,
                    color: "#55bbff",
                    style: { padding: 7, }
                  }}
                  input={{
                    placeholder: "Email",
                    style: styles.inputStyle,
                    placeholderTextColor: "#ccc"
                  }}
                  border={{
                    style: styles.borderStyle
                  }}
                />
              </Animated.View>

              <Animated.View style={[{ flex: 1 }, styleInput2]}>
                <Input
                  icon={{
                    name: "md-lock",
                    size: 22,
                    color: "#55bbff",
                    style: { padding: 7, }
                  }}
                  input={{
                    placeholder: "Password",
                    style: styles.inputStyle,
                    placeholderTextColor: "#ccc"
                  }}
                  border={{
                    style: styles.borderStyle
                  }}
                />
              </Animated.View>
            </View>

            <Animated.View style={[{ alignItems: "center", }, animatedBtnStyle]}>
              <Transition appear='horizontal'>
                <View style={{ height:85 }}>
                <Button
                    title="LOGIN"
                    btn={{ style: styles.btnStyle }}
                    titleStyle={styles.titleStyle}
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                title={"Forgot your password"}
                btn={{ style: { marginTop: 5, alignItems: 'center', } }}
                titleStyle={styles.singleText}
                />
              </View>
              </Transition>
            </Animated.View>

            <Animated.View style={[styles.sepratorContainer, animatedSeprator]}>
              <View style={styles.sepratorSide} />
              <Text>OR</Text>
              <View style={styles.sepratorSide} />
            </Animated.View>

            <Animated.View
              style={[
                styles.rowContainer,
                { marginTop: 40, marginHorizontal: 50 },
                animatedSeprator
              ]}
            >
              <Button titleStyle={styles.singleText}>
                <Ionicons size={30} color="blue" name="logo-facebook" />
              </Button>
              <Button titleStyle={styles.singleText}>
                <Ionicons size={30} color="skyblue" name="logo-twitter" />
              </Button>
              <Button titleStyle={styles.singleText}>
                <Ionicons size={30} color="red" name="logo-googleplus" />
              </Button>
            </Animated.View>

            <Animated.View
              style={[
                { marginTop: 40, alignItems: "center" },
                animatedSeprator
              ]}
            >
              <Button
                title="Dosen't have an account ? Signup"
                titleStyle={styles.singleText}
              />
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
