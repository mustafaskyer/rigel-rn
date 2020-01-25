import {ADD_NOTIFICATION, CLEAR_NOTFICATIONS} from 'redux-types';

/**
 * @param {any} payload
 * @returns
 */
export const addNotification = payload => {
  return {
    type: ADD_NOTIFICATION,
    payload,
  };
};

/**
 * @param {any} payload
 * @returns
 */
export const clearNotifications = () => {
  return {
    type: CLEAR_NOTFICATIONS,
  };
};
