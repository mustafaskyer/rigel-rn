
import { all, fork } from 'redux-saga/effects'

// sagas
import { watchLoadUsers } from './usersSaga';
// don't remove this line #imp

export default function* rootSaga(){
    yield all([
        // don't remove this line #sg
        fork(watchLoadUsers),
    ])
}