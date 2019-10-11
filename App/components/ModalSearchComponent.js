import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  I18nManager,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Modal from "./ModalComponent";
import Timer from "./ModalTimeComponent";
import AntIcons from "react-native-vector-icons/AntDesign";
import EntypoIcons from "react-native-vector-icons/Entypo";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Row from "./RowComponent";
import Item from "./ItemComponent";
import Spacer from "./SpacerComponent";
import calendarImg from "imgs/calendar.png";
import clockImg from "imgs/clock.png";


const { height } = Dimensions.get("window");
function ModalSearchComponent(props) {
  return (
    <Modal {...props} style={styles.mainView}>
      {props.showTimer ? (
        <Timer close={props.close} />
      ) : (
      <View style={styles.mainView}>
        <Row style={{ justifyContent: "space-between", width: "100%" }}>
          <Text style={styles.bgTitle}>{"Book Trip"}</Text>
          <TouchableOpacity onPress={props.close} style={styles.closeBtn}>
            <AntIcons name={"close"} size={24} color={"#BF4C58"} />
          </TouchableOpacity>
        </Row>

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex:0, width: '100%', height: '100%' }}>
        <Spacer height={13} />
        <View style={styles.itemView}>
          <Item />
        </View>

        <Spacer height={23} />
        <Row style={{ paddingEnd: 23 }}>
          <Image source={calendarImg} style={[styles._imgStyle]} />
          <Spacer width={7} />
          <Text style={styles.dtText}>{"Sunday 25 Feb 2019"}</Text>
        </Row>

        <View style={styles.itemsView}>
          <Row style={{ alignItems: "center" }}>
            <Image source={clockImg} style={styles._imgStyle} />
            <Row style={{ flex: 1 }}>
              <Spacer width={13} />
              <Text style={styles.fromText}>{"From: 06"}</Text>
              <Text style={styles.lowText}>{" AM"}</Text>
              <Spacer width={15} />
              <Text style={styles.lowText}>{"Until"}</Text>
              <Spacer width={20} />
              <Text style={styles.fromText}>{"12"}</Text>
              <Spacer width={11} />
              <Text style={styles.lowText}>{"PM"}</Text>
            </Row>
            <Text
              style={[styles.fromText, { paddingEnd: 9, fontWeight: "500" }]}
            >
              {"3 hours"}
            </Text>
          </Row>
        </View>

        <Spacer height={12} />
        <View style={styles.locationView}>
          <Row style={styles.dayTimes}>
            <View>
              <Spacer height={20} />
              <EntypoIcons name={"location-pin"} size={17} color={"#614C55"} />
            </View>
            <View style={{ flex: 1, paddingStart: 10 }}>
              <Spacer height={13} />
              <Text style={styles.dayTimeText}>{"Point"}</Text>
              <Spacer height={5} />
              <Text style={styles.dayTimeText}>{"Address of point "}</Text>
            </View>
          </Row>
        </View>

        <Spacer height={13} />
        <View style={[styles.incView]}>
          <Row style={[styles.dayTimes, { height: 85 }]}>
            <View style={{ height: 55 }}>
              <Text style={styles.dayTimeText}>{"Hours"}</Text>
              <Spacer height={11} />
              <Row>
                <View style={styles.inc}>
                  <FontAwesomeIcons name={"plus"} size={16} color={"#9F959E"} />
                </View>
                <Spacer width={43} />
                <Text style={styles.incText}>{"3"}</Text>
                <Spacer width={38} />
                <View style={styles.inc}>
                  <FontAwesomeIcons
                    name={"minus"}
                    size={16}
                    color={"#9F959E"}
                  />
                </View>
              </Row>
            </View>
            <Row style={{}}>
              <Spacer width={20} />
              <View style={styles.lineV} />
            </Row>
            <Row style={{ paddingStart: 17, justifyContent: "space-between" }}>
              <View style={{ flex: 0 }}>
                <Text style={styles.dayTimeText}>{"Time"}</Text>
                <Spacer height={14} />
                <Text style={styles.smdayTimeText}>{"clock"}</Text>
              </View>
              <Row style={{ flex: 0 }}>
                <Spacer width={40} />
                <SimpleLineIcons
                  name={"arrow-down"}
                  size={17}
                  color={"#614C55"}
                />
              </Row>
            </Row>
          </Row>
        </View>

        <View style={{ alignSelf: "center", alignItems: "center" }}>
          <Spacer height={69} />
          <Text style={styles.priceText}>{"160 Sar"}</Text>
          <Spacer height={11} />
          <Text style={styles.timeText}>{"4 hours"}</Text>
          <Spacer height={33} />
          <Text style={styles.descText}>
            {
              "a request will be sent to captin, and you should wait for 10 minutes waiting captin confirm"
            }
          </Text>
        </View>

        <Spacer height={25} />
        <TouchableOpacity onPress={props.close} style={styles.btn}>
          <Text style={styles.btnAction}>{'cancel'}</Text>
        </TouchableOpacity>
        <Spacer height={6} />
        <TouchableOpacity onPress={props.confirm} style={[styles.btn,{ backgroundColor: '#BF4C58' }]}>
        <Text style={styles.btnAction}>{'confirm'}</Text>
        </TouchableOpacity>
      <Spacer height={30} />
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
  priceText: {
    color: "#BF4C58",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "center"
  },
  timeText: {
    color: "#786E77",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14,
    textAlign: "center"
  },
  descText: {
    color: "#4F484F",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 20,
    // width: 229,
    textAlign: "center"
  },
  incView: {
    backgroundColor: "#FFFFFF",
    // border: "1px solid #E9E7E9",
    borderWidth: 1,
    borderColor: "#E9E7E9",
    borderRadius: 3,
    width: "100%",
    height: 85
  },
  locationView: {
    backgroundColor: "#FFFFFF",
    // border: "1px solid #E9E7E9",
    borderWidth: 1,
    borderColor: "#E9E7E9",
    borderRadius: 3,
    width: "100%",
    // height: 65,
    paddingStart: 14
  },
  itemsView: {
    width: "100%",
    backgroundColor: "rgba(243, 242, 243, 0.4)",
    // border: "1px solid #F3F2F3",
    borderRadius: 5,
    height: 41,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  mainView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    // boxShadow: "0 5px 10px 0 rgba(93, 93, 93, 0.09)",
    width: "100%",
    height: height - 50,
    position: "absolute",
    bottom: 0,
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 29
  },
  bgTitle: {
    color: "#000000",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "left"
  },
  itemView: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F3F2F3",
    borderRadius: 5,
    width: "100%",
    alignSelf: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#F3F2F3"
  },
  smHeader: {
    backgroundColor: "#FFFFFF",
    // border: "1px solid #F3F2F3",
    borderRadius: 5,
    width: "92%",
    height: 41,
    alignSelf: "center",
    position: "absolute",
    top: 111
  },
  bgText: {
    color: "#FFFFFF",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    textAlign: "left"
  },
  dtText: {
    // color: "#FFFFFF",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    width: 200
  },
  _imgStyle: {
    width: 17,
    height: 17,
    resizeMode: "contain",
    transform: [{ rotate: I18nManager.isRTL ? "0deg" : "180deg" }]
  },
  fromText: {
    color: "#56434B",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 16,
    textAlign: "left"
  },
  lowText: {
    color: "#8C808B",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 16,
    textAlign: "left"
  },
  searchItemContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    width: 382,
    minHeight: 169,
    paddingTop: 22.62,
    paddingStart: 19.81
    // borderWidth: 2
  },
  padding16: {
    paddingHorizontal: 16
  },
  itemImg: {
    backgroundColor: "#D4D3DA",
    borderRadius: 21,
    width: 52,
    height: 51.77,
    borderWidth: 4
  },
  sep: {
    borderWidth: 1,
    borderColor: "#ECE7E9",
    width: "93%",
    height: 1,
    alignSelf: "center"
  },
  itemImg: {
    width: 17,
    height: 17,
    resizeMode: "contain"
  },
  rBtn: {
    backgroundColor: "#BF4C58",
    borderRadius: 4,
    width: 118,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  rb: {
    color: "#fff",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    textAlign: "center"
  },
  carSections: {
    position: "absolute",
    top: 90,
    backgroundColor: "#FFFFFF",
    // borderRadius: "22px 3px 3px",
    borderTopEndRadius: 22,
    borderBottomEndRadius: 3,
    borderBottomStartRadius: 3,
    // boxShadow: "0 2px 38px 0 rgba(150, 140, 149, 0.05)",
    shadowColor: "rgba(150, 140, 149, 0.5)",
    elevation: 1,
    shadowOffset: { x: 0, y: 2 },
    shadowOpacity: 0.38,
    width: "100%",
    height: 115,
    end: 32
    // marginEnd: 32
  },
  notifyView: {
    position: "absolute",
    top: 0,
    start: 0,
    width: 21,
    height: 21,
    borderRadius: 11,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },
  notifyText: {
    color: "#BF4C58",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 11,
    // lineHeight: 13,
    textAlign: "left",
    fontWeight: "600"
  },
  hTitle: {
    color: "#FFFFFF",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    textAlign: "left",
    paddingStart: 17
  },
  cView: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    // boxShadow: "0 2px 18px 0 rgba(0, 0, 0, 0.06)",
    shadowOffset: { x: 0, y: 2 },
    shadowColor: "rgba(0,0,0,.2)",
    elevation: 1,
    shadowOpacity: 0.18,
    width: 87,
    height: 83,
    // borderWidth:1,
    marginStart: 22,
    justifyContent: "center",
    alignItems: "center"
  },
  iText: {
    color: "#6D656E",
    // fontFamily: 'ExpoArabic-Medium',
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    textAlign: "left"
  },
  imgStyle: {
    width: 49,
    height: 40,
    resizeMode: "contain"
  },
  padding16: {
    paddingHorizontal: 16
  },
  dView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    shadowColor: "rgba(150, 140, 149, 0.5)",
    elevation: 1,
    shadowOffset: { x: 2, y: 4 },
    width: "auto",
    height: 45,
    paddingStart: 9,
    paddingEnd: 16,
    justifyContent: "center"
  },
  oView: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#DFDDE0",
    borderRadius: 11,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  oText: {
    color: "#6D656E",
    // fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 16,
    textAlign: "left",
    paddingStart: 9
  },
  clndr: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    // boxShadow: "0 2px 4px 0 rgba(150, 140, 149, 0.05)",
    shadowOffset: { x: 0, y: 2 },
    shadowOpacity: 0.4,
    shadowColor: "rgba(150, 140, 149, 0.5)",
    elevation: 1,
    width: 40,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  dayTimes: {
    // marginTop: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    // boxShadow: "0 2px 4px 0 rgba(150, 140, 149, 0.05)",
    width: "92%",
    height: 65,
    paddingStart: 21,
    paddingEnd: 15
  },
  dayTimeText: {
    color: "#786E77",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left"
  },
  smdayTimeText: {
    color: "#9F959E",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 16,
    textAlign: "left"
  },
  hView: {
    backgroundColor: "#BF4C58",
    borderRadius: 3,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  inc: {
    backgroundColor: "#FFFFFF",
    // border: "1px solid #DFDDE0",
    borderWidth: 1,
    borderColor: "#DFDDE0",
    borderRadius: 15,
    width: 30.77,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  incText: {
    color: "#BF4C58",
    fontFamily: "ExpoArabic-Medium",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "center"
  },
  lineV: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DFDDE0",
    width: 1,
    height: 40
  },
  searchBtn: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#BF4C58",
    borderRadius: 20,
    width: "92%",
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
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

export default ModalSearchComponent;
