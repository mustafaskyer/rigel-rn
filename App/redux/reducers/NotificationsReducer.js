import {
  ADD_NOTIFICATION,
  CLEAR_NOTFICATIONS
} from 'redux-types';
const INIT = {
  /**
   * INITIAL VALUES
   */
};
export default (state = INIT, action) => {
  console.log('@action', action)
  switch (action.type) {
    case ADD_NOTIFICATION: {
      return { payload: action.payload };
    }
    case CLEAR_NOTFICATIONS: {
      return { payload: null }
    }
    default:
      return state;
  }
};
