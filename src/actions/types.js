//Score actions
export const SINGLE = "SINGLE";
export const DOUBLE = "DOUBLE";
export const TRIPLE = "TRIPLE";
export const TETRIS = "TETRIS";

//Playfield actions
export const LOCK_PIECE = "LOCK_PIECE";
export const CLEAR_LINES = "CLEAR_LINES";

//Current Piece actions
export const SET_CURRENT_PIECE = "SET_CURRENT_PIECE";
export const MOVE_DOWN = "MOVE_DOWN";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_RIGHT = "MOVE_RIGHT";
export const ROTATE_CLOCKWISE = "ROTATE_CLOCKWISE";
export const ROTATE_COUNTERCLOCKWISE = "ROTATE_COUNTERCLOCKWISE";
export const DROP_ONE_ROW = "DROP_ONE_ROW";

//Next Piece actions
export const GENERATE_NEXT_PIECE = "GENERATE_NEXT_PIECE";
export const SET_NEXT_PIECE = "SET_NEXT_PIECE";
export const MAKE_NEXT_PIECE_CURRENT = "MAKE_NEXT_PIECE_CURRENT";
export const UPDATE_CURRENT_PIECE_X = "UPDATE_CURRENT_PIECE_X";
export const UPDATE_CURRENT_PIECE_Y = "UPDATE_CURRENT_PIECE_Y";

//Controller actions
export const SELECT_BUTTON = "SELECT_BUTTON";
export const START_BUTTON = "START_BUTTON";
export const B_BUTTON = "B_BUTTON";
export const A_BUTTON = "A_BUTTON";
export const UP = "UP";
export const DOWN = "DOWN";
export const LEFT = "LEFT";
export const RIGHT = "RIGHT";

//Level actions
export const INCREMENT_LEVEL = "INCREMENT_LEVEL";
export const SET_LEVEL = "SET_LEVEL";

//Leaderboard actions
export const UPDATE_LEADERBOARD = "UPDATE_LEADERBOARD";

//Game State actions
export const GAME_START = "GAME_START";
export const GAME_OVER = "GAME_OVER";

//Statistics actions
export const UPDATE_PIECE_STATISTICS = "UPDATE_PIECE_STATISTICS";

//Line actions
export const UPDATE_LINES = "UPDATE_LINES";

//Lock actions
export const SET_ENTRY_DELAY = "SET_ENTRY_DELAY";
