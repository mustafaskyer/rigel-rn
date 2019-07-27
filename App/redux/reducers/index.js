import { combineReducers } from "redux";

import badges from './Badges';
import users from './UsersReducer';
// don't remove this line #imp
const rootReducer = combineReducers({
// don't remove this line #rrd
  badges,
  users
});
export default rootReducer;
