import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { withProps, pure, compose } from 'recompose';

//@icons
import Ionicons from 'react-native-vector-icons/Ionicons';


/**
 * @description An Input Component
 * @param {icon} props 
 * @param {input} props 
 * @param {border} props 
 */
const InputCo = (props) => (
    <View style={styles.container}>
        <View style={styles.row}>
            <View>
                <Ionicons {...props.icon} />
            </View>
            <View>
                <TextInput 
                    {...props.input}
                />
            </View>
        </View>
        <View {...props.border} />
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        flexDirection:'row',
    }
})

export default compose(
    pure,
    withProps(props=>({...props}))
)(InputCo)