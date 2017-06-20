import { combineReducers } from 'redux';

const normatives = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NORMATIVE':
      return [...state, { id: action.id, statement: action.statement }];
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

const currentPost = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_POST':
      return action.slug;
    case 'CLEAR':
      return null;
    default:
      return state;
  }
};

const whoaReducer = combineReducers({ normatives, currentPost });

export default whoaReducer;
