import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View>
        <Text> Login </Text>
      </View>
    );
  }
}

export default withNavigation(Login)
