import { SET_LEVEL, INCREMENT_LEVEL } from "./types";

export const setLevel = level => dispatch => {
  dispatch({
    type: SET_LEVEL,
    payload: level
  });
};

export const incrementLevel = () => dispatch => {
  dispatch({
    type: INCREMENT_LEVEL
  });
};
