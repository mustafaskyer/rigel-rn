import React, { } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from 'styles/public';
const Login = props => {
    return (
        <View style={styles.full}>
            <View style={styles.fullcenter}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
