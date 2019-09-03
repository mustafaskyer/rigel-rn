import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
// import Modal from 'react-native-modal';

function ModalComponent(props) {
  return (
      <Modal
        {...props}
        animationType="slide"
        transparent={true}
        visible={props.isVisible}
      >
        <View style={[styles.container, props.style]}>
        {props.children}
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: "100%",
    // height: "100%",
    // margin: 0,
    // padding: 0,
    // backgroundColor: "red",
    // borderWidth: 11
  }
});

export default ModalComponent;
