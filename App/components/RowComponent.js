import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RowComponent(props){
    return(
        <View {...props}  style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default RowComponent