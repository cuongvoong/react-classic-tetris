import { GENERATE_NEXT_PIECE, SELECT_BUTTON } from "../actions/types";

const initialState = {
  type: null,
  hidden: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_NEXT_PIECE:
      return {
        ...state,
        type: action.payload
      };

    case SELECT_BUTTON:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
