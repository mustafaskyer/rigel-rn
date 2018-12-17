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

import Navigator from './navigation/Navigator';
export default class App extends Component {
  constructor(){
    super()
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
