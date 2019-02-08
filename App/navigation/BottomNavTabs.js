import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { withProps, withStateHandlers, compose, lifecycle } from 'recompose';
import _ from 'lodash';
import produce from 'immer';
import BottomNavigation, {
  ShiftingTab,
  Badge
} from "react-native-material-bottom-navigation";
import { connect } from 'react-redux';

const tabs = produce([
  {
    key: "Search",
    icon: "ios-search",
    label: "Search",
    barColor: "#388E3C",
    pressColor: "rgba(255, 255, 255, 0.16)",
  },
  {
    key: "Notifications",
    icon: "ios-notifications",
    label: "Notifications",
    barColor: "#B71C1C",
    pressColor: "rgba(255, 255, 255, 0.16)",
    hasBadge: true
  },
  {
    key: "Home",
    icon: "ios-home",
    label: "Home",
    barColor: "#55bbff",
    pressColor: "rgba(255, 255, 255, 0.16)",
  },
  {
    key: "Likes",
    icon: "ios-heart",
    label: "Likes",
    barColor: "#B71C1C",
    pressColor: "rgba(255, 255, 255, 0.16)",
    hasBadge: true
  },
  {
    key: "profile",
    icon: "ios-contact",
    label: "Profile",
    barColor: "#388E3C",
    pressColor: "rgba(255, 255, 255, 0.16)",
  },
], draft => {});

const  BottomTabs = (props) => {
  // let badge = _.map(props)
  const renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({ tab, isActive }) => {
    return (
      <View style={{ flex: 1 }}>
        <ShiftingTab
          isActive={isActive}
          key={tab.key}
          label={tab.label}
          renderIcon={renderIcon(tab.icon)}
          renderBadge={( isActive ) => {
            return tab.badge && (
              <Badge style={{ backgroundColor:'#FFF' }}><Text>{tab.badge}</Text></Badge>
            )
          }}
          showBadge={true}
        />
      </View>
    )
  };

  return(
    <BottomNavigation
        onTabPress={newTab => {
          let badge = _.find(props.badges, { label: newTab.key })
          props.setActiveTab({ activeTab: newTab.key, badges: badge && badge.badge })
          props.navigation.navigate(newTab.key)
        }}
        renderTab={renderTab}
        tabs={tabs}
        defaultTabIndex={2}
    />
  )
}

const comp = compose(
  withProps(props => {
    // map badgesReducer with Tab
    produce(tabs, draft => {
      const findIndexByObjKey = (find, key) => _.findIndex(find, { key })
      const likesIndex = findIndexByObjKey(tabs, 'Likes')
      const notifyIndex = findIndexByObjKey(tabs, 'Notifications')
      tabs[likesIndex].badge = props.badges.likes
      tabs[notifyIndex].badge = props.badges.notifys
    })
  }),
  withStateHandlers(props => ({ activeTab: 'Home' }), {
    setActiveTab: props => ev => {
      return { ...props, activeTab: ev.activeTab, }
    }
  }),
  lifecycle({
    componentWillMount() {
      // no thing for now
    }
  })
)(BottomTabs)

const mapStateToProps = ({ badges }) => {
  return {
    badges
  }
}
export default connect(mapStateToProps)(comp)
