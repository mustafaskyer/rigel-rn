import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import Row from 'components/RowComponent';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
const DateItem = props => {
    return (
      <TouchableWithoutFeedback {...props}>
          <View style={[styles.dView]}>
              <Row>
                  <View style={[styles.oView, { backgroundColor: props.active ? '#BF4C58' : '#FFF' }]}>
                      <FontAwesomeIcons name={'check'} size={10} color={'#FFF'}/>
                  </View>
                  <Text style={styles.oText}>{props.title}</Text>
              </Row>
          </View>
      </TouchableWithoutFeedback>
    )
  }

  const styles = StyleSheet.create({
      dView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 3,
        shadowColor: "rgba(150, 140, 149, 0.5)",
        elevation: 1,
        shadowOffset: { x: 2, y: 4 },
        width: "auto",
        // height: 45,
        paddingStart: 9,
        paddingEnd: 16,
        justifyContent: "center"
      },
      oView:{
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#DFDDE0",
        borderRadius: 11,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center"
      },
      oText:{
        color: "#6D656E",
        // fontFamily: 'ExpoArabic-Medium',
        fontSize: 13,
        fontWeight: "300",
        lineHeight: 16,
        textAlign: "left",
        paddingStart: 9
      }
  })

  export default DateItem