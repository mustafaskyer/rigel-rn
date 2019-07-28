import {
    APP_STATE_STATUS
} from '../REDUX_TYPES';

export const appStateAction = (payload) => {
    return {
          type: APP_STATE_STATUS,
          payload
    }
}