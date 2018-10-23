import { SINGLE, DOUBLE, TRIPLE, TETRIS } from "./types";

export const single = level => dispatch => {
  dispatch({
    type: SINGLE,
    payload: level
  });
};
export const double = level => dispatch => {
  dispatch({
    type: DOUBLE,
    payload: level
  });
};
export const triple = level => dispatch => {
  dispatch({
    type: TRIPLE,
    payload: level
  });
};
export const tetris = level => dispatch => {
  dispatch({
    type: TETRIS,
    payload: level
  });
};
