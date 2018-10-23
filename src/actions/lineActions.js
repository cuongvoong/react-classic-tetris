import { UPDATE_LINES } from "./types";

export const updateLines = level => dispatch => {
  dispatch({
    type: UPDATE_LINES,
    payload: level
  });
};
