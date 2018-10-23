import { START_BUTTON, GAME_START, GAME_OVER } from "../actions/types";

const initialState = {
  running: false,
  paused: false,
  over: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_BUTTON:
      return {
        ...state,
        running: true,
        paused: state.running ? !state.paused : false
      };

    case GAME_START:
      return {
        ...state,
        running: true
      };

    case GAME_OVER:
      return {
        ...state,
        over: true
      };
    default:
      return state;
  }
};
