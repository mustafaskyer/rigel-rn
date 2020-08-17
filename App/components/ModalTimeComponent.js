import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Spacer from './SpacerComponent';
function ModalTimeComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Spacer height={32} />
        <Text style={styles.title}>{'request sent to captin'}</Text>
        <Spacer height={12} />
        <Text style={styles.timerText}>{'09:05'}</Text>
        <Spacer height={12} />
        <Text style={styles.desc}>{'waiting captin confirm'}</Text>
        <Spacer height={34} />
        <TouchableOpacity onPress={props.close} style={styles.btn}>
          <Text style={styles.btnAction}>{'cancel'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    textAlign: 'center',
  },
  btnAction: {
    color: '#FFFFFF',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#9F959E',
    borderRadius: 20,
    width: '92%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  desc: {
    color: '#4F484F',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 20,
    width: 229,
    textAlign: 'center',
  },
  timerText: {
    color: '#BF4C58',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  mainView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    // boxShadow: "0 5px 10px 0 rgba(93, 93, 93, 0.09)",
    width: '100%',
    height: 219,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
});

export default ModalTimeComponent;
