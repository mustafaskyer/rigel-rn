import React from 'react';
import { View, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList, Image, ScrollView } from 'react-native';
import { isEmpty, map } from 'lodash';

const RenderImageCom = React.memo((props) => {

    renderItem = (item,index) => {
        const { picture } = item
        return (
            <TouchableOpacity onPress={() => props.navToDetail(item,index)}>
                <Image key={index} style={styles.img} source={{ uri: picture.thumbnail }}/>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.mainView}>
            { isEmpty(props.images) && (
                <View style={styles.spinnerView}>
                    <ActivityIndicator color={'skyblue'} size={'small'} />
                </View>
            )}
            <ScrollView style={{ flex:1 }}>
                <View style={styles.scrollView}>
            {
                props.images && map(props.images,renderItem)
            }
            </View>
            </ScrollView>
        </View>
    )
})

export default RenderImageCom

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingTop: 11,
        paddingHorizontal: 3,
        paddingBottom: 3,
    },
    spinnerView:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    img: {
        width: 100,
        height: 100,
        margin:11
        // borderRadius: 22,
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})