import {
  APP_STATE_STATUS
} from 'redux-types';
import {takeLatest,put} from 'redux-saga/effects';
import api from 'api';
//api
function* loadAppStateApi(payload) {
  // console.log('@payload', payload)
  return 1;
  // const res = yield api.get("/");
  // return res;
}

function* handleWatchAppState({payload}) {
  try {
    const result = yield loadAppStateApi(payload);
    yield put({type: 'SUCCESS', payload: result});
  } catch (err) {
    yield put({type: 'FAILED', payload: err});
  }
}

export default function* watchAppState() {
  yield takeLatest(APP_STATE_STATUS, handleWatchAppState);
}
