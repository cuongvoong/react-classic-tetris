import {
  SELECT_BUTTON,
  START_BUTTON,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  LOCK,
  ROTATE_CLOCKWISE,
  ROTATE_COUNTERCLOCKWISE
} from "./types";
import { canMove, canRotate } from "../currentPieceHelper";

export const selectButton = () => dispatch => {
  dispatch({
    type: SELECT_BUTTON
  });
};

export const startButton = () => dispatch => {
  dispatch({
    type: START_BUTTON
  });
};

export const b = (playfield, currentPiece) => dispatch => {
  if (canRotate(playfield, currentPiece, -90))
    dispatch({
      type: ROTATE_COUNTERCLOCKWISE,
      payload: currentPiece
    });
};

export const a = (playfield, currentPiece) => dispatch => {
  if (canRotate(playfield, currentPiece, 90)) {
    dispatch({
      type: ROTATE_CLOCKWISE,
      payload: currentPiece
    });
  }
};

export const up = () => dispatch => {
  // dispatch({
  //   type: UP
  // });
};

export const down = (playfield, currentPiece) => dispatch => {
  if (canMove(playfield, currentPiece, 1, 0)) {
    dispatch({
      type: MOVE_DOWN
    });
  } else {
    dispatch({
      type: LOCK,
      payload: currentPiece
    });
  }
};

export const left = (playfield, currentPiece) => dispatch => {
  if (canMove(playfield, currentPiece, 0, -1)) {
    dispatch({
      type: MOVE_LEFT
    });
  }
};

export const right = (playfield, currentPiece) => dispatch => {
  if (canMove(playfield, currentPiece, 0, 1)) {
    dispatch({
      type: MOVE_RIGHT
    });
  }
};

export const select = () => dispatch => {
  dispatch({
    type: SELECT_BUTTON
  });
};
export const start = () => dispatch => {
  dispatch({
    type: START_BUTTON
  });
};
