import React, { Component } from 'react';
import { Dimensions } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
//@colors&fonts
import colors from './assets/styles/colors';
import fonts from './assets/styles/fonts';

import { StyleProvider } from '@shoutem/theme';
import {
  Card,
  Image,
  View,
  Subtitle,
  Caption,
} from '@shoutem/ui';

/**
 * @redux
 */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';


//i18n
import i18n from 'react-native-i18n';
import Navigator from './navigation/Navigator';

/**
 * Theme Adds
 */
const window = Dimensions.get('window');
const Colors = {
  BACKGROUND: '#ffffff',
  SHADOW: '#000000',
};

const MEDIUM_GUTTER = 15;

const theme = {
  'shoutem.ui.View': {
    '.h-center': {
      alignItems: 'center',
    },

    '.v-center': {
      justifyContent: 'center',
    },

    '.flexible': {
      flex: 1,
    },

    flexDirection: 'column',
  },

  'shoutem.ui.Card': {
    'shoutem.ui.View.content': {
      'shoutem.ui.Subtitle': {
        marginBottom: MEDIUM_GUTTER,
      },

      flex: 1,
      alignSelf: 'stretch',
      padding: 10,
    },

    width: (180 / 375) * window.width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: Colors.BACKGROUND,
    borderRadius: 2,
    shadowColor: Colors.SHADOW,
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
  },

  'shoutem.ui.Image': {
    '.medium-wide': {
      width: (180 / 375) * window.width,
      height: 85,
    },

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
};



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
          <StyleProvider style={theme}>
            <Navigator />
          </StyleProvider>
          </PersistGate>
      </Provider>
    );
  }
}
