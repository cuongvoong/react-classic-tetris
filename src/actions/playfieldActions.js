import { CLEAR_LINES, LOCK_PIECE } from "../actions/types";

export const clearLines = fullLines => dispatch => {
  dispatch({
    type: CLEAR_LINES,
    payload: fullLines
  });
};

export const lockPiece = currentPiece => dispatch => {
  dispatch({
    type: LOCK_PIECE,
    payload: currentPiece
  });
};
