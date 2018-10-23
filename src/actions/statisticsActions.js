import { UPDATE_PIECE_STATISTICS } from "./types";

export const updatePieceStatistics = piece => dispatch => {
  dispatch({
    type: UPDATE_PIECE_STATISTICS,
    payload: piece
  });
};
