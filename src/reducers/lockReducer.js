import { SET_ENTRY_DELAY } from "../actions/types";

const initialState = {
  lock: false,
  entryDelayFrames: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ENTRY_DELAY:
      return {
        ...state,
        lock: true,
        entryDelayFrames: action.payload
      };
    default:
      return state;
  }
};
