import { Dimensions } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

//@colors&fonts
import colors from './colors';
import fonts from './fonts';

//@screen width&height
const { width, height } = Dimensions.get('window')

export default PublicStyles =  StyleSheet.create({
    // ... any public styles will be Welcome here
    mainStyle: {
        backgroundColor:'$MAIN'
    }
})
