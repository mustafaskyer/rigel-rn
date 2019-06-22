import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#FFF',
    },
    imgContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width,
        alignSelf:'center'
    },
    img:{
        width:70,
        height:70,
        borderRadius: 35,
        alignSelf:'center',
        resizeMode:'cover',
    },
    title:{
        fontSize:27,
        textAlign:'left',
        width:170,
        color:'#FFF'
    },
    screen1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // alignSelf: 'stretch',
        alignItems:'center',
        // padding: 20,
      },
      screen2: {
        flex: 1,
        backgroundColor:'#55bbff',
        flexDirection: 'column',
        alignItems: 'flex-end',
        // alignSelf: 'stretch',
        justifyContent: 'center',
        // padding: 20,
      },

      inputStyle:{
        padding:7,
        fontSize:19,
        color:'red',
        left:11
    },

    borderStyle:{ 
        width:'95%', 
        alignSelf: 'center', 
        height:1, 
        backgroundColor:'#ccc',
        opacity:.7
    },

    btnStyle:{ 
        width:300, 
        height:40, 
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        backgroundColor:'#55bbff',
        borderColor:'rgba(255,255,255,.1)'
    },

    titleStyle:{
        fontSize:19,
        fontWeight:'600',
        color:'#FFF'
    },

    singleText:{
        fontSize: 17,
        color:'#000',
        top:11,
        opacity:.7
        
    },


    // OR
    sepratorContainer:{ 
        marginTop:60, 
        flexDirection:'row', 
        justifyContent:'space-around', 
        alignItems:'center'
    },

    sepratorSide:{
        width:'40%', 
        height:2, 
        backgroundColor:'#ccc'
    },

    rowContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    }
    
})