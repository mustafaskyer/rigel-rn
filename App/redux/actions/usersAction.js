import { LOAD_USERS_IMAGES } from "../REDUX_TYPES";
import { action } from './index';

export const loadUserImgs = payload => action(LOAD_USERS_IMAGES, payload)