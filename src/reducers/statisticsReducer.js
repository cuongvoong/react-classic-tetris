import { UPDATE_PIECE_STATISTICS } from "../actions/types";

const initialState = {
  T: 0,
  J: 0,
  Z: 0,
  O: 0,
  S: 0,
  L: 0,
  I: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PIECE_STATISTICS:
      return {
        ...state,
        [action.payload]: state[action.payload] + 1
      };
    default:
      return state;
  }
};
