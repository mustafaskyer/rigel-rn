import React from 'react';
import { Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')
const ProfileAbout = props => (
    <View style={{ flexWrap:'nowrap', maxWidth:width, paddingHorizontal: 19 }}>
        <Text style={{ fontSize:19, padding:11 }}>Bio</Text>
        <Text style={{ marginTop:19, padding:11, flexWrap:'nowrap' }}>
            Tempor nisi ex culpa tempor proident. 
            Pariatur enim eiusmod mollit ullamco sint dolor tempor duis sit qui eiusmod. 
            Anim id elit esse mollit excepteur cillum laboris ad. 
            Ut mollit eu aliquip deserunt minim.
            Qui elit sit elit aute cupidatat Lorem elit anim laboris qui irure in commodo eu. 
            Nulla occaecat id amet cillum occaecat voluptate et eu qui. 
            Laboris nulla duis occaecat est aute enim id veniam consequat reprehenderit. 
            Nulla excepteur ut ex sit duis veniam pariatur sunt deserunt laboris ut. 
            Ullamco do incididunt dolore anim amet velit excepteur sunt,
            cillum Lorem ea commodo non occaecat. 
            Esse sit aute commodo cupidatat id proident, 
            nostrud veniam consequat ex consectetur tempor.
            </Text>

        <Text style={{ fontSize:19, padding:11 }}>Favorites</Text>
        <Text style={{ marginTop:19, padding:11, flexWrap:'nowrap' }}>
        Tempor nisi ex culpa tempor proident. 
            Pariatur enim eiusmod mollit ullamco sint dolor tempor duis sit qui eiusmod. 
            Anim id elit esse mollit excepteur cillum laboris ad. 
            Ut mollit eu aliquip deserunt minim.
        </Text>
        <Text style={{ fontSize:19, padding:11 }}>Others</Text>
        <Text style={{ marginTop:19, padding:11, }}>
            Tempor nisi ex culpa tempor proident. 
            Pariatur enim eiusmod mollit ullamco sint dolor tempor duis sit qui eiusmod. 
            Anim id elit esse mollit excepteur cillum laboris ad. 
            Ut mollit eu aliquip deserunt minim.
        </Text>
    </View>
);

export default ProfileAbout;
