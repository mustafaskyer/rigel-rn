import {withProps} from 'recompose';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import R from 'ramda';

const CapFirstLetter = ({text}) => {
  let arr = R.split('', text);
  let fst = arr[0];
  arr.shift();
  return (
    <View style={styles.row}>
      <Text style={styles.capLetter}>{fst}</Text>
      <Text style={styles.othersLetters}>{arr}</Text>
    </View>
  );
};

export default withProps(props => ({...props}))(CapFirstLetter);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'center',
  },
  capLetter: {
    fontSize: 33,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  othersLetters: {
    fontSize: 19,
    fontWeight: '400',
    color: '#000',
    bottom: 3,
    start: 1,
  },
});
