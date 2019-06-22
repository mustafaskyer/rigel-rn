import { StyleSheet, Dimensions } from 'react-native';
let { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        // width,
        // height,
        backgroundColor:'tomato',
        paddingBottom: 19,
        alignItems: 'center',
        alignSelf:'center',
    },
    cartStyle:{
        width: 250,
        height: '100%',
        flex:1,
        borderWidth: 1,
        alignSelf: 'center',
        backgroundColor:'green'
    }
})