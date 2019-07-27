import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import saga from "./redux/sagas/index";
import rootReducer from "./redux/reducers/index";
import immutableTransform from 'redux-persist-transform-immutable'

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  transforms: [immutableTransform()],
};

const persistReducerr = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistReducerr,
  {},
  applyMiddleware(sagaMiddleware)
);
export const persistor = persistStore(store);
sagaMiddleware.run(saga);
