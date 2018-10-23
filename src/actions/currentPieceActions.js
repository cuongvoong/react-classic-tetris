import { SET_CURRENT_PIECE, MOVE_BLOCK, LOCK, GAME_OVER } from "./types";
import { canMove } from "../currentPieceHelper";

export const setCurrentPiece = pieceType => dispatch => {
  dispatch({
    type: SET_CURRENT_PIECE,
    payload: pieceType
  });
};

export const moveBlock = (playfield, currentPiece) => dispatch => {
  if (canMove(playfield, currentPiece, 1, 0)) {
    dispatch({
      type: MOVE_BLOCK,
      payload: currentPiece
    });
  } else {
    if (currentPiece.x === 0) {
      dispatch({
        type: GAME_OVER
      });
    } else {
      dispatch({
        type: LOCK,
        payload: currentPiece
      });
    }
  }
};
