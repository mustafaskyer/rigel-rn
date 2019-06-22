import React from 'react';
import { View, Text } from 'react-native';
import styles from 'styles/public';

const Index = () => {
    return (
        <View style={[styles.full,styles.fullcenter]}>
            <Text style={[styles.second, styles.centertext]}>
                {'Welcome\n\n❤️'}
            </Text>
        </View>
    )
}

export default Index