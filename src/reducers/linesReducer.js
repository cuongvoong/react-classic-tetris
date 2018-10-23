import { UPDATE_LINES } from "../actions/types";

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LINES:
      return state + action.payload;
    default:
      return state;
  }
};
