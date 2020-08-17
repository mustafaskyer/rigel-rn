import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Keyboard,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useImmer} from 'use-immer';

import Modal from './ModalComponent';
import MapBoxGl from 'modules/mapbox';
import Header from './HeaderAwayComponent';
import Row from './RowComponent';
import Spacer from './SpacerComponent';
import useMapSearchPlaces from 'util/searchPlaces';
import useGeolocation from 'util/useGeolocation';

const SearchItem = ({
  name,
  formatted_address,
  geometry,
  icon,
  _handleConfirm,
}) => {
  const {
    location: {lat, lng},
  } = geometry;
  return (
    <TouchableWithoutFeedback
      onPress={() => _handleConfirm({name, formatted_address, lat, lng, icon})}>
      <View style={styles.itemContainer}>
        <Row style={{justifyContent: 'space-between'}}>
          <Text style={styles.searchItemName}>{name}</Text>
          <Image source={{uri: icon}} style={styles.itemImage} />
        </Row>
        <Spacer height={11} />
        <Text style={styles.searchItemAddress}>{formatted_address}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

function MapModalComponent(props) {
  const [isVisible, setIsVisible] = useImmer(false);
  const [data, setData] = useImmer(null);
  const [place, setPlace] = useImmer(null);
  const [center, setCenter] = useImmer(null);
  const [position] = useGeolocation();
  // const [res,err] = useMapSearchPlaces(searchText)
  //
  return (
    <Modal {...props} style={styles.container}>
      <Header style={{height: 100}}>
        <Spacer height={15} />
        <Row style={{paddingStart: 16}}>
          <TouchableOpacity
            onPress={props.close}
            style={{padding: 7, zIndex: 999}}>
            <Icons name={'close'} color={'#FFF'} size={27} />
          </TouchableOpacity>
          <TouchableWithoutFeedback
            onPress={() => setIsVisible(state => (state = true))}>
            <Text style={styles.input}>{'search'}</Text>
          </TouchableWithoutFeedback>
        </Row>
      </Header>
      <MapBoxGl
        coords={
          place
            ? [parseFloat(place.lng), parseFloat(place.lat)]
            : [position.coords.longitude, position.coords.latitude]
        }
        getPointCoordinate={point => {
          setCenter(state => (state = [point[0], point[1]]));
        }}
        // key={place}
        position={position}
      />

      <Modal isVisible={isVisible} style={styles.container}>
        <Header style={{height: 100}}>
          <Spacer height={15} />
          <Row style={{paddingStart: 16}}>
            <TouchableOpacity
              onPress={() => setIsVisible(state => (state = false))}
              style={{padding: 7, zIndex: 999}}>
              <Icons name={'arrowleft'} color={'#FFF'} size={27} />
            </TouchableOpacity>
            <TextInput
              onChangeText={async text => {
                const r = await useMapSearchPlaces(text);
                console.log('@r', r);
                setData(state => (state = r));
              }}
              autoCompleteType={'off'}
              autoCorrect={false}
              autoFocus={isVisible}
              style={styles.input}
            />
          </Row>
        </Header>
        <View style={{flex: 1, backgroundColor: '#F0F0F2'}}>
          <Spacer height={19} />
          <FlatList
            style={{flex: 1}}
            data={data}
            renderItem={({item}) => (
              <SearchItem
                _handleConfirm={res => {
                  setIsVisible(state => (state = false));
                  console.log('@resPlace', res);
                  setPlace(state => (state = res));
                }}
                {...item}
              />
            )}
            ItemSeparatorComponent={() => <Spacer height={3} />}
            onMomentumScrollBegin={Keyboard.dismiss}
            showsVerticalScrollIndicator={false}
          />
          <Spacer height={19} />
        </View>
      </Modal>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    justifyContent: 'flex-start',
    paddingBottom: 30,
  },
  input: {
    width: 270,
    height: 35,
    borderRadius: 35,
    borderWidth: 0.5,
    borderColor: '#FFF',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    padding: 9,
    paddingStart: 19,
    start: 19,
  },
  itemContainer: {
    width: '92%',
    alignSelf: 'center',
    minHeight: 50,
    height: 'auto',
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingTop: 11,
    paddingStart: 19,
    paddingBottom: 11,
    paddingEnd: 19,
  },
  itemImage: {
    width: 19,
    height: 19,
    resizeMode: 'contain',
  },
  searchItemName: {
    color: '#5B505A',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
    textAlign: 'left',
  },
  searchItemAddress: {
    color: '#8C808B',
    fontFamily: 'ExpoArabic-Medium',
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 16,
    textAlign: 'left',
  },
});

export default MapModalComponent;
