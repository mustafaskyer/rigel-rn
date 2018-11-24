import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Navigator from './AppNavigation';

class Nav extends Component {
  render() {
    return (
      <Navigator {...this.props} />
    )
  }
}
      
export default connect()(Nav)