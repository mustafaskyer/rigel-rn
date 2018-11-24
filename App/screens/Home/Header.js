import React from 'react';
import { View, Text, Animated } from 'react-native';
import {  withProps, pure, compose, lifecycle, withState, withStateHandlers } from 'recompose';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Button } from '../../components';

const runInterpolate = (animation, val) => {
    let animatedInterpolate = animation.interpolate({
        inputRange:[0,1],
        outputRange: [val, 0],
        extrapolate: 'clamp'
    })
    return {
        transform:[{translateX: animatedInterpolate}]
    }
}
const Header = props => {
    let animateMenuStyle = runInterpolate(props.animation, -100)
    let animateSearchStyle = runInterpolate(props.animation, 100)
    let headerStyles = { transform:[{scale: props.animation}] }
    
    return (
        <View style={styles.headerContainer}>
            <Animated.View 
            style={animateMenuStyle}
            >
                <Button btn={{style:{ justifyContent: 'center', paddingTop: 17, }}}>
                    <Ionicons name='md-menu' size={27} color='#FFF' />
                </Button>
            </Animated.View>
            <Animated.View style={headerStyles}>
                <Text style={styles.headerText}>Home</Text>
            </Animated.View>
            <Animated.View style={animateSearchStyle}>
                <Button btn={{style:{ justifyContent: 'center', paddingTop: 11, }}}>
                    <Ionicons name='md-search' size={27} color='#FFF' />
                </Button>
            </Animated.View>
        </View>
    )
}

export default compose(
    withProps(withProps(props=>({...props}))),
    lifecycle({
        componentWillMount(){
            this.setState({ animation: new Animated.Value(0) })
        },
        componentDidMount(){
            setTimeout(
                () => {
                    Animated.parallel([
                        Animated.timing(this.state.animation,{
                            toValue:1,
                            duration:750,
                        }).start()
                    ])
                },
                750
            )
        }
    }),
)(Header)