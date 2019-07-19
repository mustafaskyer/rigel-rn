import { combineReducers } from "redux";

import badges from './Badges';
import users from './UsersReducer';
const rootReducer = combineReducers({
  badges,
  users
});
export default rootReducer;
