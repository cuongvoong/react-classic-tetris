import { LOCK_PIECE } from "./types";

export const lockPiece = currentPiece => dispatch => {
  dispatch({
    type: LOCK_PIECE,
    currentPiece
  });
};
