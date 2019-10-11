import {
  LOAD_USERS_IMAGES,
  SUCCESS_LOADED_USERS,
  FAILED_LOADED_USERS
} from "../REDUX_TYPES";
import { takeLatest, put } from "redux-saga/effects";

//api
import loadUsersImagesApi from "api/callUsers";

function* loadUsersImages() {
  console.log("start calling saga");
  try {
    const result = yield loadUsersImagesApi();
    if (result.ok) {
      if (result.data.results) {
        yield put({ type: SUCCESS_LOADED_USERS, payload: result.data.results });
      }
    } else {
      yield put({ type: FAILED_LOADED_USERS, payload: result.data });
    }
  } catch (err) {
    yield put({ type: FAILED_LOADED_USERS, payload: err });
  }
}

export function* watchLoadUsers() {
  yield takeLatest(LOAD_USERS_IMAGES, loadUsersImages);
}
