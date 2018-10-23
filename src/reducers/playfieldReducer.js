import { LOCK, CLEAR_LINES } from "../actions/types";

const initialState = Array(20).fill(Array(10).fill(0));

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCK:
      const stateWithCurrentPiece = [];

      //For every row in the grid
      for (let i = 0; i < state.length; i++) {
        const row = [];
        //For every element in the grid row
        for (let j = 0; j < state[i].length; j++) {
          //If current row is between current piece's X position
          if (
            i >= action.payload.x &&
            i <= action.payload.x + action.payload.shape.length - 1
          ) {
            // If current element between current piece's Y position
            if (
              j >= action.payload.y &&
              j <=
                action.payload.shape[i - action.payload.x].length -
                  1 +
                  action.payload.y
            ) {
              row.push(
                action.payload.shape[i - action.payload.x][
                  j - action.payload.y
                ] || state[i][j]
              );
            } else {
              row.push(state[i][j]);
            }
          } else {
            row.push(state[i][j]);
          }
        }
        stateWithCurrentPiece.push(row);
      }

      return stateWithCurrentPiece;

    case CLEAR_LINES:
      return {
        ...state,
        grid: action.payload
      };

    default:
      return state;
  }
};
