import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { connect } from 'react-redux';
import forestImg from '../assets/imgs/forest.jpg';

const { width, height } = Dimensions.get('window')
class Feed extends React.Component{

    componentWillMount() {
        console.log(this.props)
    }
    render(){
        return(
            <View>
                <Text>Feed</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ItemDetail',{ name: 'Mustafa' })}
                >
                    <Text>Item</Text>
                </TouchableOpacity>

                <View style={{ height:250 }}></View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ItemDetail',{ name: 'Mustafa' })}
                    style={{ alignItems:'center' }}
                >
                <Transition shared="logo">
                    <Image 
                        style={{ width:300, height:200, resizeMode:'cover'  }}
                        source={forestImg}
                    />
                </Transition>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(Feed)