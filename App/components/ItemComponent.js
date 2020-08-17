import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
} from 'react-native';
import StarRating from 'react-native-star-rating';

import Row from 'components/RowComponent';
import Spacer from 'components/SpacerComponent';
import clockImg from 'imgs/clock.png';
/**
 *
 *
 * @returns
 */
function SearchItem() {
  function onStarRatingPress(rating) {}
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        height: 169,
        // paddingStart: 19.81
      }}>
      <Row style={{flex: 1, alignItems: 'flex-start'}}>
        <View
          style={[
            {
              backgroundColor: '#D4D3DA',
              borderRadius: 21,
              width: 52,
              height: 51.77,
              marginTop: 22.62,
              marginStart: 20,
            },
          ]}>
          <Image style={styles.itemImg} />
        </View>
        <View style={{paddingStart: 13, flex: 1, marginTop: 23}}>
          <Text style={styles.itemName}>{'Faisal'}</Text>
          <Spacer height={11} />
          <View style={{width: 89}}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={3}
              fullStarColor={'#FFC400'}
              starSize={14}
            />
          </View>
          <Spacer height={11} />
          <Text style={styles.carName}>{'Toyota Corolla 2019'}</Text>
        </View>
        <View style={{marginTop: 43, marginEnd: 31}}>
          <Text>{'80 SAR'}</Text>
          <Text>{'per hour'}</Text>
        </View>
      </Row>
      <View style={styles.sep} />
      <Row
        style={{
          height: 51,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingEnd: 15,
        }}>
        <Row
          style={{
            flex: 0,
            alignItems: 'center',
            paddingStart: 16,
            height: 51,
          }}>
          <Image source={clockImg} style={styles.itemImg} />
          <Spacer width={11} />
          <Image source={clockImg} style={styles.itemImg} />
          <Spacer width={11} />
          <Image source={clockImg} style={styles.itemImg} />
          <Spacer width={11} />
          <Image source={clockImg} style={styles.itemImg} />
          <Spacer width={11} />
        </Row>
        <Row>
          <Text style={styles.price}>{'80 Sar '}</Text>
          <Text style={styles.pHour}>{'per hours'}</Text>
        </Row>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  pHour: {
    color: '#786E77',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'left',
    paddingStart: 1,
  },
  price: {
    color: '#BF4C58',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
    textAlign: 'left',
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F2F3',
  },
  smHeader: {
    backgroundColor: '#FFFFFF',
    // border: "1px solid #F3F2F3",
    borderRadius: 5,
    width: '92%',
    height: 41,
    alignSelf: 'center',
    position: 'absolute',
    top: 111,
  },
  bgText: {
    color: '#FFFFFF',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    textAlign: 'left',
  },
  dtText: {
    color: '#FFFFFF',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '300',
    textAlign: 'left',
  },
  imgStyle: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    transform: [{rotate: I18nManager.isRTL ? '0deg' : '180deg'}],
  },
  fromText: {
    color: '#56434B',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 16,
    textAlign: 'left',
  },
  lowText: {
    color: '#8C808B',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 16,
    textAlign: 'left',
  },
  searchItemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: 382,
    minHeight: 169,
    paddingTop: 22.62,
    paddingStart: 19.81,
    // borderWidth: 2
  },
  padding16: {
    paddingHorizontal: 16,
  },
  itemImg: {
    backgroundColor: '#D4D3DA',
    borderRadius: 21,
    width: 52,
    height: 51.77,
    borderWidth: 4,
  },
  sep: {
    borderWidth: 1,
    borderColor: '#ECE7E9',
    width: '93%',
    height: 1,
    alignSelf: 'center',
  },
  itemImg: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
  },
  rBtn: {
    backgroundColor: '#BF4C58',
    borderRadius: 4,
    width: 118,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  rb: {
    color: '#fff',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    textAlign: 'center',
  },
});

export default SearchItem;
