import React from "react";
import {
  View,
  StyleSheet,
  Picker,
  Text,
  TouchableWithoutFeedback
} from "react-native";
import Icons from "react-native-vector-icons/AntDesign";
import { map } from "lodash";
import { useImmer } from 'use-immer';

import Modal from "./ModalComponent";
import Row from "./RowComponent";
import Spacer from "./SpacerComponent";

const PickerCom = ({ items, selected, onchange }) => (
  <Picker
    selectedValue={selected}
    style={{ width: "33%", flex: 1 }}
    onValueChange={onchange}
  >
    {map(items, item => (
      <Picker.Item label={item} value={item} />
    ))}
  </Picker>
);
function TimerPickerComponent(props) {
  const [h, setH] = useImmer();
  const [m, setM] = useImmer();
  const [p, setP] = useImmer();
  const hInc = props.hInc || 1;
  const mInc = props.mInc || 5;
  const hours = [];
  const minutes = [];
  const amOrPm = ["Am", "Pm"];

  map(Array.from({ length: 12 }, (v, k) => k + 0), h => {
    hours.push(h + hInc);
  });
  map(Array.from({ length: 60 / mInc }, (v, k) => k + 1), m => {
    minutes.push(m * mInc);
  });

  return (
    <Modal {...props} style={styles.container}>
      <TouchableWithoutFeedback onPress={props.close}>
        <View style={[styles.close,{ zIndex: 1 }]}>
          <Icons name={"close"} size={19} color={"#FFF"} />
        </View>
      </TouchableWithoutFeedback>
      <Row style={styles.rowView}>
        <PickerCom
          items={hours}
          selected={h}
          onchange={itemValue => setH(state => state = itemValue)}
        />
        <Spacer width={11} />
        <PickerCom
          items={minutes}
          selected={m}
          onchange={itemValue => setM(state => state = itemValue)}
        />
        <Spacer width={11} />
        <PickerCom
          items={amOrPm}
          selected={p}
          onchange={itemValue => setP(state => state = itemValue)}
        />
      </Row>
      <TouchableWithoutFeedback onPress={() => props.confirm({ h, m, p })}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{"Confirm"}</Text>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: 300,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    justifyContent: "flex-start",
    paddingBottom: 30
  },
  close: {
    width: 33,
    height: 33,
    borderRadius: 33 / 2,
    position: "absolute",
    end: 18,
    top: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BF4C58"
  },
  rowView: {
    width: "100%"
  },
  btn: {
    position: "absolute",
    bottom: 19,
    width: "92%",
    height: 50,
    alignSelf: "center",
    backgroundColor: "#BF4C58",
    borderRadius: 20,
    justifyContent: "center"
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    textAlign: "center"
  }
});

export default TimerPickerComponent;
