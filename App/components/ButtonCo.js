import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withProps, pure, compose } from 'recompose';


const ButtonCo = ({title, btn, titleStyle, onPress, children}) => (
    <TouchableOpacity onPress={onPress}>
        <View {...btn}>
            {children}
            <Text style={titleStyle}>{title}</Text>
        </View>
    </TouchableOpacity>
)

export default compose(
    pure,
    withProps(props => ({...props}))
)(ButtonCo)