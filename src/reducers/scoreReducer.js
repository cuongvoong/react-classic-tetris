import { SINGLE, DOUBLE, TRIPLE, TETRIS } from "../actions/types";

const initialState = {
  top: 10000,
  current: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLE:
      return {
        ...state,
        current: 40 * (action.payload + 1) + state.current
      };
    case DOUBLE:
      return {
        ...state,
        current: 100 * (action.payload + 1) + state.current
      };
    case TRIPLE:
      return {
        ...state,
        current: 300 * (action.payload + 1) + state.current
      };
    case TETRIS:
      console.log(action.payload);
      return {
        ...state,
        current: 1200 * (action.payload + 1) + state.current
      };
    default:
      return state;
  }
};
