import { UPDATE_LEADERBOARD } from "../actions/types";

const initialState = [
  {
    name: "HOWARD",
    score: 10000,
    level: 9
  },
  {
    name: "OTASON",
    score: 7500,
    level: 5
  },
  {
    name: "LANCE",
    score: 5000,
    level: 0
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LEADERBOARD:
      return state;
    default:
      return state;
  }
};
