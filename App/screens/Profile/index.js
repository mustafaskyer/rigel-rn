import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
// import RAnimated from 'react-native-reanimated';
// import styles from './styles';
// import publicStyles from '../../assets/styles/public';

//@animated
import Animated from "react-native-reanimated";

//@lgContainer
import LGContainer from "../Hocs/LGContainer";

//@Header
import Header from "./Header";
import ProfileTabs from "./Tabs";
import FixedHeader from "./FixedHeader";

const Profile = (props) => {
    let [scrollY, setScroll] = useState(new Animated.Value(0))
    let interpolateTop = Animated.interpolate(scrollY, {
        inputRange:[170,171],
        outputRange:[0, 100],
        extrapolate: Animated.Extrapolate.CLAMP
    })
  return (
    <View style={{ flex: 1 }}>
      <FixedHeader scrollY={scrollY} />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY
                }
              }
            }
          ],
          { useNativeDriver: true }
        )}
        stickyHeaderIndices={[1]}
        style={{ 
            marginTop: 100
         }}
      >
        <Header scrollY={scrollY} />
        <ProfileTabs />
      </Animated.ScrollView>
    </View>
  );
};

export default LGContainer(Profile);

//  export default compose(
//      pure,
//      withProps(props => ({...props})),
//      lifecycle({
//          componentDidMount() {
//              console.log('Profile Mounted')
//          }
//      })
//  )(LGContainer(Notifications,{ colors: ['#ccc', '#FFF', '#ddd'] }))
