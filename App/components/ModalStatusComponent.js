import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Alert,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useImmer} from 'use-immer';
import AntIcons from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import {connect} from 'react-redux';

import Modal from './ModalComponent';
import Row from './RowComponent';
import Spacer from './SpacerComponent';
import DateItem from './DateItemComponent';
const {height} = Dimensions.get('window');
import langs from 'langs';
import api from 'api';
import {addNotification} from 'redux-actions';

function WorkTimesOption(props) {
  // console.log('@props', props.activeShifts)
  const {id} = props;
  const index = _.findIndex(props.activeShifts, _id => _id === id);
  const isSelected = index !== -1;

  return (
    <TouchableWithoutFeedback onPress={() => props.onPress(props.id)}>
      <Row style={styles.optionContainer}>
        <Spacer width={13} />
        <View
          style={[
            styles.oView,
            {backgroundColor: isSelected ? '#BF4C58' : '#FFF'},
          ]}>
          <FontAwesomeIcons name={'check'} size={10} color={'#FFF'} />
        </View>
        <Spacer width={9} />
        <Text style={styles.fromTxt}>{langs('modal_status.from')}</Text>
        <Spacer width={25} />
        <Text style={styles.numTxt}>{props.time_start}</Text>
        <Spacer width={25} />
        <Text style={styles.fromTxt}>{langs('modal_status.am')}</Text>
        <Spacer width={12} />
        <View style={styles.optionSep} />
        <Spacer width={14} />
        <Text style={styles.fromTxt}>{langs('modal_status.to')}</Text>
        <Spacer width={37} />
        <Text>{props.time_end}</Text>
        <Spacer width={37} />
        <Text style={styles.fromTxt}>{langs('modal_status.pm')}</Text>
        <Spacer width={13} />
      </Row>
    </TouchableWithoutFeedback>
  );
}

function ModalStatusComponent(props) {
  const [activeDate, setActiveDate] = useImmer(null);
  const [date, setDate] = useImmer(moment());
  const [perHour, setPerHour] = useImmer(false);
  const [shifts, setShifts] = useImmer(false);
  const [features, setFeatures] = useImmer(false);
  const [activeShifts, setActiveShifts] = useImmer([]);
  const [activeFeatures, setActiveFeatures] = useImmer([]);
  const [errorIn, setErrorIn] = useImmer(null);
  const [loading, setLoading] = useImmer(null);

  const {user} = props.user;
  useEffect(() => {
    if (!api.headers.Authorization) {
      api.setHeader('Authorization', `Bearer ${user.token}`);
    }
    api.get('trip-shift').then(res => {
      if (_handleRes(res)) {
        setShifts(state => (state = res.data.data));
      }
    });
    api.get('trip-feature').then(res => {
      if (_handleRes(res)) {
        setFeatures(state => (state = res.data.data));
      }
    });
  }, [setFeatures, setShifts, user.token]);
  _handleRes = res => {
    if (res.ok) {
      if (res.data.success) {
        return true;
      }
    }
    // Alert.alert("", res.data.message, [{ text: "ok", onPress: () => 0 }]);
    return false;
  };
  const handleSetActive = id => {
    const index = _.findIndex(activeShifts, _id => _id === id);
    if (index === -1) {
      setActiveShifts(state => (state = [...activeShifts, id]));
    } else {
      const _shifts = [...activeShifts];
      _shifts.splice(index, 1);
      setActiveShifts(state => (state = _shifts));
    }
  };

  const handleSetActiveFeatures = id => {
    const index = _.findIndex(activeFeatures, _id => _id === id);
    if (index === -1) {
      setActiveFeatures(state => (state = [...activeFeatures, id]));
    } else {
      const _features = [...activeFeatures];
      _features.splice(index, 1);
      setActiveFeatures(state => (state = _features));
    }
  };

  handleAddShift = async () => {
    if (date && !activeDate) {
      setErrorIn(state => (state = 'date'));
      return;
    }
    if (_.isEmpty(activeShifts)) {
      setErrorIn(state => (state = 'activeShifts'));
      return;
    }
    const body = {
      the_date: moment(date).format('YYYY-MM-DD'),
      trip_shift_price_ids: activeShifts,
      hour_available: perHour,
      trip_feature_ids: activeFeatures,
      storing_confirmed: false,
    };
    setLoading(state => (state = true));
    const res = await api.post('driver-shift', body);
    setLoading(state => (state = false));
    console.log('@res', res);
    if (res.ok) {
      if (res.data.success) {
        //
        setDate(state => (state = null));
        setActiveDate(state => (state = null));
        setActiveShifts(state => (state = []));
        setActiveFeatures(state => (state = []));
        setPerHour(state => (state = false));
        props.closeAndNavToSech();
      } else {
        // an err
        props.close();
        props.addNotification({message: res.data.message, type: 'error'});
      }
    } else {
      // an err
      props.close();
      props.addNotification({message: res.data.message, type: 'error'});
    }
  };
  return (
    <Modal {...props} style={styles.mainView}>
      <Spacer height={36} />
      <Row style={styles.topRow}>
        <Text style={styles.titleTxt}>
          {langs('modal_status.add_avaliable_status')}
        </Text>
        <TouchableWithoutFeedback onPress={props.close}>
          <View style={styles.closeBtn}>
            <AntIcons name={'closecircleo'} size={24} color={'#635B64'} />
          </View>
        </TouchableWithoutFeedback>
      </Row>
      <Spacer height={34} />
      <ScrollView style={{flex: 1, maxWidth: '100%'}}>
        <View style={styles.padding16}>
          <Text style={[styles.smTitle, errorIn === 'date' && {color: 'red'}]}>
            {langs('modal_status.select_date')}
          </Text>
          <Spacer height={11} />
          <FlatList
            style={{maxHeight: 45}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[
              {
                id: 1,
                title: langs('modal_status.today'),
                value: moment().format('YYYY-MM-DD'),
              },
              {
                id: 2,
                title: langs('modal_status.tomorrow'),
                value: moment()
                  .add('day', 1)
                  .format('YYYY-MM-DD'),
              },
            ]}
            renderItem={({item}) => (
              <View style={styles.vBorder}>
                <DateItem
                  active={activeDate === item.id}
                  onPress={() => {
                    if (errorIn === 'date') {
                      setErrorIn(state => (state = null));
                    }
                    setActiveDate(state => (state = item.id));
                    setDate(state => (state = item.value));
                  }}
                  title={item.title}
                />
              </View>
            )}
            ItemSeparatorComponent={() => <Spacer width={9} />}
            ListFooterComponent={() => (
              <Row>
                <Spacer width={10} />
                <TouchableWithoutFeedback>
                  <View
                    style={[
                      styles.clndr,
                      activeDate === 'calendar' && {
                        borderWidth: 1,
                        borderColor: '#BF4C58',
                      },
                    ]}>
                    <DatePicker
                      style={{width: 30}}
                      date={date}
                      mode="date"
                      placeholder="select date"
                      format="YYYY-MM-DD"
                      minDate={new Date()}
                      confirmBtnText={langs('modal_status.confirm')}
                      cancelBtnText={langs('modal_status.cancel')}
                      hideText
                      onDateChange={date => {
                        setActiveDate(state => (state = 'calendar'));
                        setDate(state => (state = date));
                      }}
                      customStyles={{
                        dateIcon: {
                          resizeMode: 'contain',
                          width: 21,
                          height: 21,
                        },
                      }}
                      iconSource={require('imgs/calendar.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </Row>
            )}
          />
          <Spacer height={11} />
          {activeDate && (
            <Row>
              <View style={[styles.oView, {backgroundColor: '#BF4C58'}]}>
                <FontAwesomeIcons name={'check'} size={10} color={'#FFF'} />
              </View>
              <Spacer width={11} />
              <Text>{moment(date).format('YYYY-MM-DD')}</Text>
            </Row>
          )}
          <Spacer height={41} />
          <Row>
            <Text
              style={[
                styles.smTitle,
                errorIn === 'activeShifts' && {color: 'red'},
              ]}>
              {langs('modal_status.select_work_time')}
            </Text>
          </Row>
          <Spacer height={16} />
          {_.map(shifts, shift => (
            <View key={shift.id}>
              <WorkTimesOption
                // item={{ id: shift.id, from: shift.time_start, to: shift.time_end, start: "am", end: "pm" }}
                {...shift}
                onPress={id => {
                  if (errorIn === 'activeShifts') {
                    setErrorIn(state => (state = null));
                  }
                  handleSetActive(id);
                }}
                activeShifts={activeShifts}
              />
              <Spacer height={12} />
            </View>
          ))}
          <Spacer height={18} />
          <Text style={styles.chooseTxt}>
            {langs('modal_status.choose_option')}
          </Text>
          <Spacer height={11} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{flex: 1, maxHeight: 75}}
            horizontal
            data={features}
            renderItem={({item}) => {
              const index = _.findIndex(activeFeatures, _id => _id === item.id);
              const isSelected = index !== -1;
              return (
                <TouchableWithoutFeedback
                  onPress={() => handleSetActiveFeatures(item.id)}>
                  <View
                    style={[
                      styles.optionView,
                      isSelected && {borderColor: '#BF4C58'},
                    ]}>
                    <Image source={{uri: item.icon}} style={styles.iconStyle} />
                    <Spacer height={12} />
                    <Text
                      style={[
                        styles.itemName,
                        isSelected && {color: '#BF4C58'},
                      ]}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
            ItemSeparatorComponent={() => <Spacer width={4} />}
          />
          <Spacer height={15} />
          <TouchableWithoutFeedback
            onPress={() => setPerHour(state => (state = !perHour))}>
            <Row style={{alignItems: 'center'}}>
              <View
                style={[
                  styles.selectHOption,
                  {backgroundColor: perHour ? '#BF4C58' : '#FFF'},
                ]}>
                <FontAwesomeIcons name={'check'} size={10} color={'#FFF'} />
              </View>
              <Spacer width={8} />
              <Text style={styles.selectHText}>
                {langs('modal_status.availble_per_hour')}
              </Text>
            </Row>
          </TouchableWithoutFeedback>
        </View>
        <Spacer height={160} />
      </ScrollView>
      <TouchableWithoutFeedback disabled={loading} onPress={handleAddShift}>
        <View style={styles.btnBtm}>
          {loading ? (
            <ActivityIndicator size={'small'} color={'#FFF'} />
          ) : (
            <Text style={styles.btnBtmText}>{langs('modal_status.add')}</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowOffset: {x: 1, y: 2},
    shadowColor: 'rgba(93, 93, 93, 0.09)',
    width: '100%',
    height: height - 50,
    position: 'absolute',
    bottom: 0,
    alignItems: 'flex-start',
  },
  topRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 16,
    paddingEnd: 22,
    width: '100%',
  },
  titleTxt: {
    color: '#000000',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'left',
  },
  clndr: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    // boxShadow: "0 2px 4px 0 rgba(150, 140, 149, 0.05)",
    shadowOffset: {x: 0, y: 2},
    shadowOpacity: 0.4,
    shadowColor: 'rgba(150, 140, 149, 0.5)',
    elevation: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vBorder: {
    // border: "1px solid #DFDDE0",
    borderWidth: 1,
    borderColor: '#DFDDE0',
    borderRadius: 3,
    width: 'auto',
    height: 39,
    justifyContent: 'center',
  },
  padding16: {
    paddingHorizontal: 16,
    flex: 1,
  },
  smTitle: {
    color: '#837682',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 16,
    textAlign: 'left',
  },
  optionContainer: {
    // border: '1px solid #DFDDE0',
    borderWidth: 1,
    borderColor: '#DFDDE0',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
  },
  oView: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#DFDDE0',
    borderRadius: 11,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionSep: {
    // border: "1px solid #DFDDE0",
    borderWidth: 1,
    borderColor: '#DFDDE0',
    width: 1,
    height: 30,
  },
  optionView: {
    // border: "1px solid #DFDDE0",
    borderWidth: 1,
    borderColor: '#DFDDE0',
    borderRadius: 5,
    width: 88,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectHOption: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#DFDDE0',
    borderRadius: 5,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectHText: {
    color: '#786E77',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
    textAlign: 'left',
  },
  btnBtm: {
    backgroundColor: '#614C55',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // minHeight: 96,
    // maxHeight: 96,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtn: {
    padding: 11,
  },
  btnBtmText: {
    color: '#FCFCFC',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    textAlign: 'center',
  },
  fromTxt: {
    color: '#8C808B',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 16,
    textAlign: 'left',
  },
  numTxt: {
    color: '#56434B',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    textAlign: 'left',
  },
  chooseTxt: {
    color: '#837682',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 16,
    textAlign: 'left',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  itemName: {
    color: '#8C808B',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 16,
    textAlign: 'center',
  },
});

const mapProps = state => {
  return {
    user: state.user,
  };
};

export default connect(
  mapProps,
  {addNotification},
)(ModalStatusComponent);
