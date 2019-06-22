import React from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { connect } from 'react-redux';

// styles
import styles from './DrawerStyles';

const Drawer = props => {
    renderDrawer = () => null;
    return (
        <View style={{ flex:1, backgroundColor: 'rgba(0,0,0,.09)', borderBottomWidth:5, borderBottomColor: '#FFF' }}>
            <DrawerLayout
          ref={drawer => {
            this.drawer = drawer;
          }}
          drawerWidth={300}
          keyboardDismissMode="on-drag"
          drawerType={'front'}
          useNativeAnimations={true}
          renderNavigationView={this.renderDrawer}
          contentContainerStyle={Platform.select({ 
                  ios: styles.contentContainerStyleIos, 
                  android: styles.contentContainerStyleAndroid
                })}>
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                <Text style={styles.text}> later ✋ </Text>
              </TouchableOpacity>
          </View>
        </DrawerLayout>
        </View>
    );
}

const mapProps = state => {
    return {
        badges: state.badges,
        // ... other reducers to connect with drawer ❤️
    }
}

// conect reduces with component,
// replace null with action, in case handle redux actions
export default connect(mapProps, null)(Drawer)
