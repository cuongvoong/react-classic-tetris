import { GAME_START } from "./types";

export const gameStart = () => dispatch => {
  dispatch({
    type: GAME_START
  });
};
