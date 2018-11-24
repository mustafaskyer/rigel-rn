import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './CartsStyles';
import { ScrollView } from 'react-native-gesture-handler';
import _ from 'lodash';

export default class Carts extends Component {
  state = {
      scrollX: new Animated.Value(0)
  }

  render() {
      console.log('#', this.state.scrollX)
    return (
      <View style={styles.container}>
        <ScrollView
            scrollEventThrottle={1}
            horizontal
            pagingEnabled
            onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.state.scrollX,
                    },
                  },
                },
              ])}
        >
                {
                    _.map(['red','yellow','tomato','green'], (item,i) => {
                        return <View key={i} style={[styles.cartStyle,{ backgroundColor:item }]} ></View>
                    })
                }
        </ScrollView>
      </View>
    );
  }
}
