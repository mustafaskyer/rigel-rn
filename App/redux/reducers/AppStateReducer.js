import {APP_STATE_STATUS} from 'redux-types';
const INIT = {
  /**
   * INITIAL VALUES
   */
};
export default (state = INIT, action) => {
  switch (action.type) {
    case APP_STATE_STATUS: {
      return {
        appState: action.payload.appState,
      };
    }
    default:
      return state;
  }
};
