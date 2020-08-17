import {
  LOAD_USERS_IMAGES,
  SUCCESS_LOADED_USERS,
  FAILED_LOADED_USERS,
} from 'redux-types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_USERS_IMAGES: {
      return {loading: true};
      break;
    }
    case SUCCESS_LOADED_USERS: {
      return {loading: false, images: action.payload};
      break;
    }
    case FAILED_LOADED_USERS: {
      return {loading: false, images: null, err: action.payload};
      break;
    }
    default:
      return state;
  }
};
