import React, { Component } from 'react';
import { View, Text } from 'react-native';


/**
 * @redux
 */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';

import Navigator from './navigation/Navigator';
export default class App extends Component {
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
