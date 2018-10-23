import { SET_LEVEL, INCREMENT_LEVEL } from "../actions/types";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LEVEL:
      return action.payload;
    case INCREMENT_LEVEL:
      return state + 1;
    default:
      return state;
  }
};
