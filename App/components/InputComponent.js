import React, {useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  I18nManager,
} from 'react-native';
import Spacer from 'components/SpacerComponent';
import Row from 'components/RowComponent';
import EyeImg from 'imgs/eye.png';
import {useImmer} from 'use-immer';

const InputLogin = React.memo(props => {
  const ref = useRef();
  const [focused, setFocused] = useImmer(false);
  const [isSecure, setIsSecure] = useImmer(props.secureTextEntry);
  const {placeholder, onChangeText, validated} = props;
  console.log();
  return (
    <TouchableWithoutFeedback onPress={() => ref.current.focus()}>
      <View>
        <Row style={{width: '100%'}}>
          {props.code && <Text style={styles.phoneCode}>{props.code} </Text>}
          <TextInput
            ref={ref}
            style={[styles.inputView]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            keyboardAppearance="dark"
            placeholderTextColor="#c4c4c6"
            onFocus={() => setFocused(state => (state = true))}
            onBlur={() => setFocused(state => (state = false))}
            {...props}
            secureTextEntry={props.secureTextEntry && isSecure}
          />
          {props.toggleEye && (
            <TouchableOpacity
              onPress={() => setIsSecure(state => (state = !isSecure))}>
              <Image
                source={EyeImg}
                style={[styles.eyeImg, {opacity: isSecure ? 1 : 0.3}]}
              />
            </TouchableOpacity>
          )}
        </Row>
        <Spacer height={15} />
        <View
          style={[
            styles.bottomLine,
            {
              backgroundColor: focused ? '#BF4C58' : '#ECE7E9',
              height: focused ? 2 : 1,
            },
            validated !== null && validated && {backgroundColor: 'green'},
            validated !== null &&
              validated === false && {backgroundColor: '#BF4C58'},
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  inputView: {
    // width: 310,
    // height: 46,
    // borderRadius: 4,
    // backgroundColor: "#f4f4f4",
    paddingStart: 9,
    flex: 1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    // minHeight: 30
    // paddingVertical: 15
  },
  validationErr: {
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
  },
  validationSuccess: {
    borderBottomColor: 'green',
    borderBottomWidth: 0.5,
  },
  bottomLine: {
    backgroundColor: '#BF4C58',
    width: '92%',
    height: 2,
  },
  phoneCode: {
    color: '#624D56',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 19,
    textAlign: 'left',
  },
  eyeImg: {
    width: 24,
    height: 14.39,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    paddingEnd: 50,
  },
});

export default InputLogin;
