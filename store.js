import { createStore, combineReducers, applyMiddleware } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension'
import { devToolsEnhancer } from 'redux-devtools-extension';

import { whoaReducer } from './whoa-components';

const initialState = {
  whoa: {
    normatives: [],
  },
};

// REDUCERS
export const reducer = combineReducers({ whoa: whoaReducer });
// ACTIONS
// export const serverRenderClock = isServer => dispatch => {
//   return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
// };

// export const startClock = () => dispatch => {
//   return setInterval(
//     () => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }),
//     800
//   );
// };

// export const addCount = () => dispatch => {
//   return dispatch({ type: actionTypes.ADD });
// };

export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, devToolsEnhancer());
};
