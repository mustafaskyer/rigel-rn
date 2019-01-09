import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Chroma from 'chroma-js';


import About from './About';
import Posts from './Posts';

const { width } = Dimensions.get('window')
const ProfileTabs = props => {
  const routesState = [
    { key: 'About', title: 'About' },
    { key: 'Posts', title: 'Posts' },
  ]
  const [index, setIndex] = useState(0)
  const [routes] = useState(routesState)
  const [state] = useState({ index, routes })
  return(
    <TabView
        navigationState={state}
        renderScene={SceneMap({
          Posts: Posts,
          About: About,
        })}
        onIndexChange={index => setIndex({ index })}
        initialLayout={{ width, height:0 }}
        swipeEnabled={true}
        animationEnabled={true}
        renderTabBar={
          props => (
            <TabBar 
              {...props} 
              style={{ 
                  height:70, 
                  justifyContent:'center', 
                  paddingTop:19,
                  backgroundColor:Chroma('#93a3b9')
                 }} 
              indicatorStyle={{ backgroundColor:'#FFF', height:1 }} 
            />
          )
        }
        tabBarPosition='top'
        colindicatorStyle={'red'}
    />
  )
}

export default ProfileTabs;
