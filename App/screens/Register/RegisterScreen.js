import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './RegisterStyles';
import { connect } from 'react-redux';

function RegisterScreen(props){
    const [state, setState] = useState(null)
    useEffect(() => {
        /**  */
    })
    return(
        <View style={styles.container}>
            <Text>{'RegisterScreen'}</Text>
        </View>
    )
}


/**
 * @param {any} state 
 * @returns 
 */
const mapProps = state => {
    return {

    }
}
export default connect(mapProps)(RegisterScreen)