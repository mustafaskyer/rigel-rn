import StyleSheet from 'react-native-extended-stylesheet';

export default StyleSheet.create({
  // ... any public styles will be Welcome here
  mainStyle: {
    backgroundColor: '$MAIN',
  },
  full: {
    flex: 1,
  },
  fullcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  second: {
    color: '$second',
  },
  centertext: {
    textAlign: 'center',
  },
});
