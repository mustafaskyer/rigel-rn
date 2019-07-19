import config from "config";

const stackOptions = {
  navigationOptions: {
    gesturesEnabled: false,
    headerMode: "none"
  }
};

const options = {
  headerMode: "none"
};

const tabsOptions = {
  tabBarOptions: {
    activeTintColor: "#e91e63",
    labelStyle: {
      fontSize: 12
    },
    style: {
      borderWidth: 1
    }
  }
};

const drawerOptions = {
  drawerBackgroundColor: "#FFF",
  drawerType: "front",
  overlayColor: "#FFF",
  // drawerLockMode: 'unlocked',
  drawerWidth: 300
};

function build(tabs, drawer) {
  let obj = {};
  if (config.hasDrawer) {
    obj[drawer] = drawer;
  }
  if (config.hasTabs) {
    obj[tabs] = tabs;
  }
  return obj;
}
module.exports = { options, stackOptions, tabsOptions, drawerOptions, build };
