import { combineReducers } from "redux";

import badges from './Badges';
import users from './UsersReducer';
// don't remove this line #imp
	import AppStateReducer from './AppStateReducer'
const rootReducer = combineReducers({
// don't remove this line #rrd
	AppStateReducer,
  badges,
  users
});
export default rootReducer;
