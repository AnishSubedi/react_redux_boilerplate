import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import promise from "redux-promise";

const initialState = {};

const middleware = [promise];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
