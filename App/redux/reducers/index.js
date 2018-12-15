import { combineReducers } from "redux";
import Immutable from "immutable";

// func that take object and return .toJs

const rootReducer = combineReducers({
  dd: () => Immutable.Map({ arr: [1, 2, 3, 4, 5, 6] }).toJS()
});
export default rootReducer;
