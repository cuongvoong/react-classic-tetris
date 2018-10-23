import { combineReducers } from "redux";
import score from "./scoreReducer";
import playfield from "./playfieldReducer";
import level from "./levelReducer";
import lines from "./linesReducer";
import music from "./musicReducer";
import statistics from "./statisticsReducer";
import nextPiece from "./nextPieceReducer";
import currentPiece from "./currentPieceReducer";
import gameState from "./gameStateReducer";
import leaderboard from "./leaderboardReducer";
import lock from "./lockReducer";

const rootReducer = combineReducers({
  score,
  playfield,
  level,
  lines,
  music,
  statistics,
  currentPiece,
  nextPiece,
  gameState,
  leaderboard,
  lock
});

export default rootReducer;
