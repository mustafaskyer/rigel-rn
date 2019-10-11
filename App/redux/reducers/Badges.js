import produce from "immer";
import { 
    UPDATE_LIKE_NOTIFY,
    UPDATE_NOTIFICATION_NOTIFY,
 } from '../REDUX_TYPES';
const INIT = { likes:null, notifys: null };

export default (state = INIT, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UPDATE_NOTIFICATION_NOTIFY:
        draft.notifys = action.payload;
      case UPDATE_LIKE_NOTIFY:
        draft.likes = action.payload
    }
  });
};
