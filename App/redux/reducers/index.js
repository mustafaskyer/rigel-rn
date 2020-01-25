import {combineReducers} from 'redux';

import badges from './Badges';
import users from './UsersReducer';
// don't remove this line #imp
import notifications from './NotificationsReducer';
import appState from './AppStateReducer';
const rootReducer = combineReducers({
  // don't remove this line #rrd
  notifications,
  appState,
  badges,
  users,
});
export default rootReducer;
