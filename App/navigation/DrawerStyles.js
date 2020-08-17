import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 99999,
    backgroundColor: 'red',
  },
  contentContainerStyleIos: {
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 60,
  },
  contentContainerStyleAndroid: {
    elevation: 100,
    backgroundColor: '#000',
  },
  text: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
  layout: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    zIndex: 9999,
  },
});
