export {appStateAction} from './AppStateAction';
export {addNotification, clearNotifications} from './NotificationsAction';

export const action = (type, payload) => {
  return {type, payload};
};
