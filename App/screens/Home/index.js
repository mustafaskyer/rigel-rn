import React, { Component } from 'react';
import { View, Text, Dimensions, StatusBar } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import Header from './Header';
import Carts from './Carts';

/****
 * @connect
 */
import { connect } from 'react-redux';
/****
 * @redux Action Test
 */
import { updateLikesNotify, updateNotifyNotify } from '../../redux/actions/Badges';
//@styles
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window')
class Home extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content')
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.props.updateNotifyNotify(11)
        this.props.updateLikesNotify(99)
      },
      2500,
    )
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

export default connect(null, { updateLikesNotify, updateNotifyNotify })(Home)
