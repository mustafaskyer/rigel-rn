import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { withProps, withStateHandlers, compose, lifecycle } from 'recompose';
import _ from 'lodash';
import BottomNavigation, {
  ShiftingTab,
  Badge
} from "react-native-material-bottom-navigation";
import { connect } from 'react-redux';

const tabs = [
  {
    key: "Search",
    icon: "ios-search",
    label: "Search",
    barColor: "#3f5256",
    pressColor: "rgba(255, 255, 255, 0.16)",
  },
  {
    key: "Notifications",
    icon: "ios-notifications",
    label: "Notifications",
    barColor: "#b4b2af",
    pressColor: "rgba(255, 255, 255, 0.16)",
    hasBadge: true
  },
  {
    key: "Home",
    icon: "ios-home",
    label: "Home",
    barColor: "#5b7d7f",
    pressColor: "rgba(255, 255, 255, 0.16)",
  },
  {
    key: "Messages",
    icon: "ios-mail",
    label: "Messages",
    barColor: "#9fa89b",
    pressColor: "rgba(255, 255, 255, 0.16)",
    hasBadge: true
  },
  {
    key: "Profile",
    icon: "ios-contact",
    label: "Profile",
    barColor: "#4b78b3",
    pressColor: "rgba(255, 255, 255, 0.16)",
  },
];


const  BottomTabs = (props) => {
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
    // map badgesReducer with Tabs
    _.filter(props.badges, (badge) => {
      _.filter(tabs, tab => tab.key === badge.label)
        let fIndex = _.findIndex(tabs, { key: badge.label })
        tabs[fIndex] = { ...tabs[fIndex], ... badge  }
    });
    return { ...props }
    
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
    badges: badges.badges
  }
}
export default connect(mapStateToProps)(comp)
