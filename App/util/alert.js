import { Alert as AlertRN } from 'react-native';

function Alert(message,text='ok',onPress){
    return AlertRN.alert('',message,[{
        text,
        onPress: () => onPress
    }])
}

export default Alert