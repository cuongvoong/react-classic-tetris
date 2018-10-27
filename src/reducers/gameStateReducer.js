import { START_BUTTON, GAME_START, GAME_OVER } from "../actions/types";
import { GAME_STATE } from "../constants";

const initialState = GAME_STATE.LevelSelection;

export default (state = initialState, action) => {
  switch (action.type) {
    case START_BUTTON:
      if (state === GAME_STATE.Playing) {
        return GAME_STATE.Paused;
      }
      if (state === GAME_STATE.Paused) {
        return GAME_STATE.Playing;
      }
      return state;
    case GAME_START:
      return GAME_STATE.Playing;

    case GAME_OVER:
      return GAME_STATE.GameOver;
    default:
      return state;
  }
};
