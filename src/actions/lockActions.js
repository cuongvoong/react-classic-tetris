import { SET_ENTRY_DELAY } from "./types";

export const setEntryDelay = entryDelayFrames => dispatch => {
  dispatch({
    type: SET_ENTRY_DELAY,
    payload: entryDelayFrames
  });
};
