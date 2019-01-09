import React, { Component } from 'react';
import { View } from 'react-native';
import Chroma from "chroma-js";
import LinearGradient from "react-native-linear-gradient";
import { compose, withProps,  } from 'recompose';
import _ from 'lodash';


const LGContainer = (WrappedComp, props) => {
  return class LGC extends Component{
    render(){
      return(
        <LinearGradient 
        colors={[ 
            Chroma('#c5d8f1').desaturate(),
            Chroma('#c5d8f1'),
            Chroma('#c5d8f1').desaturate(),
            Chroma('#c5d8f1').darken()

          ]}
        >
          <View style={{ minHeight:'100%', minWidth:'100%', }}>
          <WrappedComp />
          </View>
      </LinearGradient>
    )
    }
  }
}

export default LGContainer

