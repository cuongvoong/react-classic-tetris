import { LOCK_PIECE } from "../actions/types";

const initialState = {
  lock: false,
  row: 19
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCK_PIECE:
      return {
        ...state
      };
    default:
      return state;
  }
};
