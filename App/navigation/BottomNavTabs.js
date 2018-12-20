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
    barColor: "#388E3C",
    pressColor: "rgba(255, 255, 255, 0.16)",
  },
  {
    key: "Notifications",
    icon: "ios-notifications",
    label: "Notifications",
    barColor: "#B71C1C",
    pressColor: "rgba(255, 255, 255, 0.16)",
    badge: 19
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
    badge: 77
  },
  {
    key: "profile",
    icon: "ios-contact",
    label: "Profile",
    barColor: "#B71C1C",
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
          renderBadge={() => {
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
          props.setActiveTab(newTab.key)
          props.navigation.navigate(newTab.key)
        }}
        renderTab={renderTab}
        tabs={tabs}
        defaultTabIndex={2}
    />
  )
}

const comp = compose(
  withProps(props => ({ ...props })),
  withStateHandlers(props => ({ activeTab: 'Home' }), {
    setActiveTab: props => ev => {
      let badges = [ { label:'Home', badge: 17 } , {label:'Likes', badge: '77' } ]
      let isActive = _.find(badges, { label: ev })
      let badge = isActive && isActive.badge
      
      return { ...props, activeTab: ev, badge }
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps, prevState) {
      console.log('@props', prevProps)
      console.log('@state', prevState)
    },
    componentWillMount() {
      // this.setState()
    }
  })
)(BottomTabs)

const mapStateToProps = state => {
  return {
    data: state.dd
  }
}
export default connect(mapStateToProps)(comp)
