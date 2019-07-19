import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image,  } from 'react-native';

const UserDetail = (props) => {
  const { picture, cell, name: { title, first, last } } = props.navigation.getParam('item')
  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Text>{`${title}. ${first} ${last}`}</Text>
        <Text>{`${cell}`}</Text>
      </View>
        <Image style={styles.img} source={{ uri: picture.large }}/>
    </View>
  )
}

export default UserDetail

const styles = StyleSheet.create({
  mainView: {
    flex:1,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    paddingTop: 44,
    height: 90,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '100%'
  },
  img: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
  },
})