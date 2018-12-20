import React, { Component } from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';
//@colors&fonts
import colors from './assets/styles/colors';
import fonts from './assets/styles/fonts';

/**
 * @redux
 */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';


//i18n
import i18n from 'react-native-i18n';
import Navigator from './navigation/Navigator';


console.disableYellowBox = true;
export default class App extends Component {
  constructor(){
    super()
    i18n.locale = 'tr' // manually set language 
    EStyleSheet.build({
      ...colors,
      ...fonts
  });
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
