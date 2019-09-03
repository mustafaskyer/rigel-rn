import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntIcons from 'react-native-vector-icons/AntDesign';
import helper from 'util/helper';
function BackIconComponent(props){
    const name = helper.rtl ? 'arrowright' : 'arrowleft'
    return(
        <TouchableOpacity {...props} style={[styles.container,props.style]}>
            <AntIcons name={name} size={props.size || 19} color={props.color || '#000'} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingStart: 0,
        width: 60,
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
})

export default BackIconComponent