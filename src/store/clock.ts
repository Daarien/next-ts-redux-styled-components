import { Dispatch, Reducer } from "redux";
import { ThunkDispatch, ThunkAction } from "redux-thunk";

export type ClockState = {
  lastUpdate: number;
  light: boolean;
  count: number;
};

const initialState: ClockState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

enum actionTypes {
  ADD = "ADD",
  TICK = "TICK"
}

// ACTIONS
type TickAction = {
  type: actionTypes.TICK;
  light: boolean;
  ts: number;
};
type AddAction = {
  type: actionTypes.ADD;
};
type Action = TickAction | AddAction;

type ThunkResult<R> = ThunkAction<R, ClockState, undefined, Action>;

export const serverRenderClock = (
  isServer: boolean
): ThunkResult<void> => dispatch => {
  dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
};

export const startClock = (): ThunkResult<number> => dispatch => {
  return setInterval(
    () => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }),
    1000
  );
};

export const addCount = (): ThunkResult<void> => dispatch => {
  dispatch({ type: actionTypes.ADD });
};

// REDUCER
export const reducer: Reducer<ClockState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};
