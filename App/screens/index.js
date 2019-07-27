import LoginScreen from "screens/Login/LoginScreen";
import RegisterScreen from "screens/Register/RegisterScreen";
import HomeScreen from "screens/Home/HomeScreen";
import SettingsScreen from "screens/Settings/SettingsScreen";

const auth = {
  LoginScreen,
  RegisterScreen
};
const reistered = {
  HomeScreen,
  SettingsScreen
};
module.exports = { auth, reistered };
