
import { all, fork } from 'redux-saga/effects'

// sagas
import { watchLoadUsers } from './usersSaga';

export default function* rootSaga(){
    yield all([
        fork(watchLoadUsers),
    ])
}