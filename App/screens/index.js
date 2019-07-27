import LoginScreen from "screens/Login/LoginScreen";
import RegisterScreen from "screens/Register/RegisterScreen";
import HomeScreen from "screens/Home/HomeScreen";
import SettingsScreen from "screens/Settings/SettingsScreen";
// don't remove this line #imp

const auth = {
  LoginScreen,
  RegisterScreen
};
const reistered = {
  HomeScreen,
  SettingsScreen,
};
const all = {
  ...auth,
  ...reistered,
  // don't remove this line #scr
}
module.exports = { auth, reistered, all };
