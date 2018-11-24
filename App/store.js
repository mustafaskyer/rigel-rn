import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import saga from './redux/sgags/index'
import rootReducer from './redux/reducers/index';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2,
};

const persistReducerr = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistReducerr,{},applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(saga)