import { combineReducers } from "redux";
import TestReducer from "./reducer_test";

export default combineReducers({
  test: TestReducer
});
