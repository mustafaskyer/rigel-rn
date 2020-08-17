import {LOAD_USERS_IMAGES} from 'redux-types';
import {action} from './index';

export const loadUserImgs = payload => action(LOAD_USERS_IMAGES, payload);
