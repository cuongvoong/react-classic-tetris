import { SET_CURRENT_PIECE, DROP_ONE_ROW } from "./types";

export const setCurrentPiece = pieceType => dispatch => {
  dispatch({
    type: SET_CURRENT_PIECE,
    payload: pieceType
  });
};

export const dropOneRow = currentPiece => dispatch => {
  dispatch({
    type: DROP_ONE_ROW,
    payload: currentPiece
  });
};
