import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
      },
      contentContainerStyleIos: {
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
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
      }
})