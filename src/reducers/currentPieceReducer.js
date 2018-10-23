import {
  SET_CURRENT_PIECE,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_DOWN,
  MOVE_BLOCK,
  ROTATE_CLOCKWISE,
  ROTATE_COUNTERCLOCKWISE
} from "../actions/types";
import { PIECE } from "../constants";

const initialState = {
  type: null,
  x: 0,
  y: 0,
  top: 0,
  bottom: 0,
  shape: null,
  rotation: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PIECE:
      return {
        ...state,
        type: action.payload,
        x: PIECE[action.payload].spawn.x,
        y: PIECE[action.payload].spawn.y,
        shape: PIECE[action.payload][0].shape,
        top: PIECE[action.payload][0].top,
        bottom: PIECE[action.payload][0].bottom,
        rotation: 0
      };
    case MOVE_LEFT:
      return {
        ...state,
        y: state.y - 1
      };

    case MOVE_RIGHT:
      return {
        ...state,
        y: state.y + 1
      };

    case MOVE_DOWN:
      return {
        ...state,
        x: state.x + 1
      };

    case MOVE_BLOCK:
      return {
        ...state,
        x: state.x + 1
      };

    case ROTATE_CLOCKWISE:
      const clocwiseRotation =
        state.rotation + 90 >= 360 ? 0 : state.rotation + 90;

      return {
        ...state,
        rotation: clocwiseRotation,
        shape: PIECE[action.payload.type][clocwiseRotation].shape
      };

    case ROTATE_COUNTERCLOCKWISE:
      const counterClocwiseRotation =
        state.rotation === 0 ? 270 : state.rotation - 90;

      return {
        ...state,
        rotation: counterClocwiseRotation,
        shape: PIECE[action.payload.type][counterClocwiseRotation].shape
      };

    default:
      return state;
  }
};
