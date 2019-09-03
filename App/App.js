import React, { Component } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
/**
 * OneSignal
 */
import OneSignal from "react-native-onesignal";

//@colors&fonts
import colors from "./assets/styles/colors";
import fonts from "./assets/styles/fonts";

/**
 * @redux
 */
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./store";

//i18n
import i18n from "react-native-i18n";
import Navigator from "./navigation/Navigator";
/** Disabled console warnings */
console.disableYellowBox = true;
export default class App extends Component {
  constructor() {
    super();
    i18n.locale = "tr"; // manually set language
    EStyleSheet.build({
      ...colors,
      ...fonts
    });

    OneSignal.init("98036549-9d8f-40fd-abdf-05fc18d89f2c");
    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
    OneSignal.configure(); // triggers the ids event
  }
  componentWillUnmount() {
    OneSignal.removeEventListener("received", this.onReceived);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log("Message: ", openResult.notification.payload.body);
    console.log("Data: ", openResult.notification.payload.additionalData);
    console.log("isActive: ", openResult.notification.isAppInFocus);
    console.log("openResult: ", openResult);
  }

  onIds(device) {
    console.log("Device info: ", device);
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}
