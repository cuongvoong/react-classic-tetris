import { GAME_START, GAME_OVER } from "./types";

export const gameStart = () => dispatch => {
  dispatch({
    type: GAME_START
  });
};

export const gameOver = () => dispatch => {
  dispatch({
    type: GAME_OVER
  });
};
