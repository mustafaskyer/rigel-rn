import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";

import Modal from "./ModalComponent";
import Spacer from "./SpacerComponent";
import Timer from "./ModalTimeComponent";

const { height } = Dimensions.get("window");
function ModalBookAlertComponent(props) {
  return (
    <Modal {...props} style={styles.container}>
      {props.showTimer ? (
        <Timer close={props.close} />
      ) : (
        <View style={styles.mainView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, height: 263 }}
          >
            <Spacer height={41} />
            <Text style={styles.bgTitle}>
              {"are you sure to make reservation ?"}
            </Text>
            <Spacer height={14} />
            <Text style={styles.smDesc}>
              {
                "a request will be send to captin, you will wait about 10 minutes"
              }
            </Text>
            <Spacer height={25} />
            <TouchableOpacity onPress={props.close} style={styles.btn}>
              <Text style={styles.btnAction}>{"cancel"}</Text>
            </TouchableOpacity>
            <Spacer height={6} />
            <TouchableOpacity
              onPress={props.confirm}
              style={[styles.btn, { backgroundColor: "#BF4C58" }]}
            >
              <Text style={styles.btnAction}>{"confirm"}</Text>
            </TouchableOpacity>
            <Spacer height={20} />
          </ScrollView>
        </View>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  btnAction: {
    color: "#FFFFFF",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    textAlign: "center"
  },
  btn: {
    backgroundColor: "#9F959E",
    borderRadius: 20,
    width: "92%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  smDesc: {
    color: "#4F484F",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 20,
    width: 229,
    textAlign: "center"
  },
  bgTitle: {
    color: "#000000",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    textAlign: "center"
  },
  container: {
    flex: 1
  },
  mainView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "100%",
    height: 263,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    shadowColor: "rgba(93, 93, 93, 0.9)",
    shadowOffset: { x: 0, y: 5 },
    shadowOpacity: 1
  }
});

export default ModalBookAlertComponent;
