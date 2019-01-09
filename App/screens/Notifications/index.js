import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import publicStyles from '../../assets/styles/public';
import { 
    compose,
    lifecycle,
    pure,
    withProps
 } from 'recompose';

 const Notifications = props => (
     <View style={[ publicStyles.fullCenter, styles.container ]}>
        <Text>Notifications</Text>
     </View>
 )

 export default compose(
     pure,
     withProps(props => ({...props})),
     lifecycle({
         componentDidMount() {
             console.log('Notifications Mounted')
         }
     })
 )(Notifications)