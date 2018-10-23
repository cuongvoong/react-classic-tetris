import { GENERATE_NEXT_PIECE } from "./types";
import { RANDOM_PIECE } from "../constants";

export const generateNextPiece = currentPiece => dispatch => {
  const nextPiece = newPiece(currentPiece);

  dispatch({
    type: GENERATE_NEXT_PIECE,
    payload: nextPiece
  });
};

const newPiece = currentPiece => {
  const randomize = Math.floor(Math.random() * 8);
  if (randomize !== 7) {
    if (currentPiece.type === null) {
      return RANDOM_PIECE[randomize];
    } else {
      if (RANDOM_PIECE[randomize] !== currentPiece.type) {
        return RANDOM_PIECE[randomize];
      } else {
        return RANDOM_PIECE[Math.floor(Math.random() * 7)];
      }
    }
  } else {
    return RANDOM_PIECE[Math.floor(Math.random() * 7)];
  }
};
