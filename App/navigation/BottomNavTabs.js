import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import BottomNavigation, {
  ShiftingTab
} from "react-native-material-bottom-navigation";

export default class App extends React.Component {
  state = { activeTab: "one" };
  tabs = [
    {
      key: "Home",
      icon: "list",
      label: "Home",
      barColor: "#55bbff",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "Login",
      icon: "music-note",
      label: "Music",
      barColor: "#388E3C",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "LoginForm",
      icon: "movie",
      label: "Movies & TV",
      barColor: "#B71C1C",
      pressColor: "rgba(255, 255, 255, 0.16)"
    }
  ];

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({ tab, isActive }) => (
    <View style={{ flex: 1 }}>
      <ShiftingTab
        isActive={isActive}
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    </View>
  );

  render() {
    return (
      //   <View style={{ flex: 1 }}>
      //     <View style={{ flex: 1 }}>
      //       {/* {this._renderScreens()} */}
      //     </View>
      <BottomNavigation
        onTabPress={newTab => this.props.navigation.navigate(newTab.key)}
        renderTab={this.renderTab}
        tabs={this.tabs}
      />
      //   </View>
    );
  }
}
