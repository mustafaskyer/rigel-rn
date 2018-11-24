import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

import forestImg from '../assets/imgs/forest.jpg';
import { Transition } from 'react-navigation-fluid-transitions';
const { width, height } = Dimensions.get('window')

export default class ItemDetail extends React.Component{
    componentWillMount() {
        console.log(this.props)
    }
    render(){
        return(
            <View>
                <Text>ItemDetail</Text>
                <View style={{ height:50 }}></View>
                <Transition shared="logo">
                    <Image 
                        style={{ width, height:200, resizeMode:'cover'  }}
                        source={forestImg}
                    />
                </Transition>
            </View>
        )
    }
}