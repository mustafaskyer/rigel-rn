import React from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const Header = ({ scrollY }) => {
    let imgOpacityInterpolate = Animated.interpolate(scrollY,{
        inputRange:[0,100],
        outputRange:[1,0],
        extrapolate:'clamp'
    })
    let txtContOpacityInterpolate = Animated.interpolate(scrollY,{
        inputRange:[150,160, 180, 200, 210],
        outputRange:[1,.7, .5, .3, 0],
        extrapolate:'clamp'
    })
    return (
        <View style={{ 
                height:250,
                marginTop:19, 
                width:'100%', 
                alignItems:'center',
                justifyContent:'center'
                 }}>
            {/* Image */}
            <Animated.View style={{
                width:100,
                height:100,
                borderRadius:50,
                borderWidth:3,
                opacity: imgOpacityInterpolate
            }}></Animated.View>
            {/* Name, Position, Where */}
            <Animated.View style={{ justifyContent:'center', height:100, marginTop:5, alignItems:'center', opacity:txtContOpacityInterpolate }}>
                <Text style={{ marginTop:5, fontSize:18, fontWeight:'600' }}>Mustafa Skyer</Text>
                <Text style={{ marginTop:5, fontSize:16, fontWeight:'500' }}>Mobile Apps Developer</Text>
                <Text style={{ marginTop:5, fontSize:14, fontWeight:'400' }}>Above the sky</Text>
            </Animated.View>
            {/* <Text style={{ textAlign:'right' }}>edit</Text> */}
        </View>
    )
}

export default Header;
