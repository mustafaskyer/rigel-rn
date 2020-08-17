import {action} from './index';
import {UPDATE_LIKE_NOTIFY, UPDATE_NOTIFICATION_NOTIFY} from 'redux-types';

export const updateLikesNotify = payload => action(UPDATE_LIKE_NOTIFY, payload);
export const updateNotifyNotify = payload =>
  action(UPDATE_NOTIFICATION_NOTIFY, payload);
