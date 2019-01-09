import React, { useEffect, useState } from 'react';
import Chroma from 'chroma-js';
import { Text, View, FlatList, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import _ from 'lodash';
const { height } = Dimensions.get('window')

const Loading = () => (
    <View style={{ height:100, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size={0} color={'red'} />
    </View>
)

const Empty = () => (
    <View style={{ height:100, justifyContent:'center', alignItems:'center' }}><Text> No Data Found </Text></View>
)
const Posts = props => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(async() => {
        setLoading(true)
        let res = await fetch('https://randomuser.me/api/?results=7')
        setLoading(false)
        if(res.ok){
            let resObj = JSON.parse(res._bodyText).results
            setPosts(resObj)
        }
    },['posts'])
    return(
        (
            <View style={{ flex:1, height  }}>
                <FlatList 
                data={posts}
                style={{ flex:1, height }}
                ListHeaderComponent={() => loading && <Loading />  }
                ListEmptyComponent={() => !loading && <Empty /> }
                renderItem={({ item }) => (
                    <View style={{ height:80, width:'100%', backgroundColor: Chroma.random() }}>
                        <Text style={{ padding:11, fontSize:17, fontWeight: '600', color:Chroma.random() }}>{item.name.title} {item.name.first} {item.name.last}</Text>
                    </View>
                )}
                />
            </View>
        )
    )
};

export default Posts;
