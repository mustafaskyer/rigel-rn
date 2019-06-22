import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        flex:1,
    },
    headerContainer:{
        width, 
        height:85,
        paddingTop:30,
        paddingHorizontal:19,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#55bbff',
        borderColor:'rgba(255,255,255,.1)',
        flexDirection:'row',
    },
    headerText:{
        color:'#FFF',
        fontSize:21,
        fontWeight:'700'
    }
})