import React, { Component } from 'react';
import { View, Text, Dimensions, StatusBar } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import Header from './Header';
import Carts from './Carts';
//@styles
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window')
export default class Home extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Transition appear='horizontal'>
            <Header />
        </Transition>

        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <Text>HOME</Text>
        </View>
        

      </View>
    );
  }
}
