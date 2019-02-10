import React, { Component } from 'react';
import { View, Text, Dimensions, StatusBar } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import Header from './Header';
import LottieView from 'lottie-react-native';

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
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
    return (
      <View style={[styles.container]}>

        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../assets/animations/LottieLogin.json')}
          loop={false}
          style={{ flex:1, width:'100%', height: '100%' }}
        />
        {/* <Transition appear='horizontal'>
            <Header />
        </Transition> */}

        {/* <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <Text>HOME</Text>
        </View> */}
        

      </View>
    );
  }
}

export default connect(null, { updateLikesNotify, updateNotifyNotify })(Home)
