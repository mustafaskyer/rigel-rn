import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import chroma from 'chroma-js';
import Animated from 'react-native-reanimated';
const FixedHeader = ({ scrollY }) => {
    // console.log('@scrollY', scrollY)
    let opacityInterpolate = Animated.interpolate(scrollY,{
        inputRange:[100, 110, 130],
        outputRange:[0, 1.3, 1],
        extrapolate: Animated.Extrapolate.CLAMP
    })
    let imageInterpolateY = Animated.interpolate(scrollY,{ 
        inputRange: [100, 110, 130 ],
        outputRange: [ 0, 1.3, 1 ],
        extrapolate: Animated.Extrapolate.CLAMP
     })
     let imageStyle = {
         transform:[{ scale: imageInterpolateY }]
     }
    // //  animate desc text
    let descTextInterpolate = Animated.interpolate(scrollY,{
        inputRange:[200, 220,],
        outputRange:[0, 1],
        extrapolate:'clamp'
    })
    let textContainerStyle = {
        transform: [{ scaleX: descTextInterpolate }]
    }
    return(
        <Animated.View style={{ 
            position:'absolute', 
            height: 115, 
            top:0, 
            left:0, 
            right:0, 
            backgroundColor:chroma('#c5d8f1'),
            // opacity: opacityInterpolate,
            zIndex: 99999,
            borderBottomColor: '#FFF',
            borderBottomWidth: .5,
            }}>
            <View style={{ flex: 1, flexDirection: 'row', }}>
            <Animated.View 
                style={[{ 
                    width:60, 
                    height:60, 
                    borderRadius: 60/2, 
                    borderWidth:1,
                    marginTop: 40,
                    marginLeft: 21,
                    },
                    imageStyle
                ]}
            />
            <Animated.View style={[{ 
                    flex:1, 
                    justifyContent:'center', 
                    alignItems:'flex-start',
                    marginTop:30,
                    marginLeft:9
                    }, 
                    textContainerStyle
                    ]}>
                <Text>Mustafa Skyer</Text>
                <Text style={{ paddingTop: 7, }}>Mobile App Developer</Text>
            </Animated.View>
            </View>
            </Animated.View>
    )
}

export default FixedHeader;
