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

/** this is the overall timeline, for now... might deprecate soon */
const timelineFrame = (state = 0, action) => {
  switch (action.type) {
    case 'TICK':
      return ++state;
    case 'UNTICK':
      return --state;
    case 'SEEK_MAIN':
      if (action.timelineFrame) return action.timelineFrame;
    default:
      return state;
  }
};

const timelines = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TIMELINE':
      return { ...state, [action.id]: action.timeline };
    case 'REMOVE_TIMELINE':
      return delete state[action.id];
    case 'SEEK':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          currentFrame: Number(action.timelineFrame),
        },
      };
    default:
      return state;
  }
};

const whoaReducer = combineReducers({
  normatives,
  currentPost,
  timelineFrame,
  timelines,
});

export default whoaReducer;
