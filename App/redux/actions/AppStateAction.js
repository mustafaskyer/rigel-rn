import {APP_STATE_STATUS} from 'redux-types';

export const appStateAction = payload => {
  return {
    type: APP_STATE_STATUS,
    payload,
  };
};
