import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { StateType } from "typesafe-actions";

import * as clock from "./clock";

const reducers = {
  clock: clock.reducer
};

export type TState = StateType<typeof reducers>;

export type TStore = Store<TState>;

export default createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<TState>))
);
