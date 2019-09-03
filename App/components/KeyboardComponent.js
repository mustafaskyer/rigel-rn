import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';

function KeyboardComponent(props){
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : 'height'} {...props} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {props.children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})

export default KeyboardComponent