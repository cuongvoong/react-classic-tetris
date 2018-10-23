import { CLEAR_LINES } from "../actions/types";

export const clearLines = (playfield, fullLines) => dispatch => {
  const newPlayfield = [
    ...Array(fullLines.length).fill(Array(10).fill(0)),
    ...playfield.filter((_, index) => {
      return fullLines.indexOf(index) === -1;
    })
  ];

  dispatch({
    type: CLEAR_LINES,
    payload: newPlayfield
  });
};
