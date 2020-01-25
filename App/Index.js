import React, {useEffect, useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import styles from 'styles/public';
import {connect} from 'react-redux';
import {loadUserImgs} from 'redux-actions/usersAction';

// components
import RenderImage from 'components/RenderImage';

const Index = props => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    props.loadUserImgs();
    if (props.users.images) {
      setImages(props.users.images);
    }
  }, [images]);
  return (
    props.users && (
      <View style={[styles.full, styles.fullcenter, {paddingTop: 44}]}>
        <RenderImage
          navToDetail={(item, index) =>
            props.navigation.navigate('Detail', {item, index})
          }
          images={images}
        />
      </View>
    )
  );
};

const mapProps = state => {
  return {
    users: state.users,
  };
};
export default connect(
  mapProps,
  {loadUserImgs},
)(Index);
