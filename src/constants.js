export const GAME_STATE = {
  LevelSelection: 0,
  Playing: 1,
  Paused: 2,
  GameOver: 3
};

export const KEYBOARD = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  A: 65,
  B: 66
};

export const PIECE = {
  T: {
    0: {
      shape: [[0, 0, 0], ["T", "T", "T"], [0, "T", 0]],
      top: 1,
      bottom: 2
    },

    90: {
      shape: [[0, "T", 0], ["T", "T", 0], [0, "T", 0]],
      top: 0,
      bottom: 2
    },
    180: {
      shape: [[0, "T", 0], ["T", "T", "T"], [0, 0, 0]],
      top: 0,
      bottom: 1
    },
    270: {
      shape: [[0, "T", 0], [0, "T", "T"], [0, "T", 0]],
      top: 0,
      bottom: 2
    },
    spawn: {
      x: -1,
      y: 4
    },
    color: "white"
  },
  J: {
    0: {
      shape: [[0, 0, 0], ["J", "J", "J"], [0, 0, "J"]],
      top: 1,
      bottom: 2
    },
    90: {
      shape: [[0, "J", 0], [0, "J", 0], ["J", "J", 0]],
      top: 0,
      bottom: 2
    },
    180: {
      shape: [["J", 0, 0], ["J", "J", "J"], [0, 0, 0]],
      top: 0,
      bottom: 1
    },
    270: {
      shape: [[0, "J", "J"], [0, "J", 0], [0, "J", 0]],
      top: 0,
      bottom: 2
    },
    spawn: {
      x: -1,
      y: 4
    },
    color: "blueviolet"
  },
  Z: {
    0: {
      shape: [[0, 0, 0], ["Z", "Z", 0], [0, "Z", "Z"]],
      top: 1,
      bottom: 2
    },
    90: {
      shape: [[0, 0, "Z"], [0, "Z", "Z"], [0, "Z", 0]],
      top: 0,
      bottom: 2
    },
    180: {
      shape: [[0, 0, 0], ["Z", "Z", 0], [0, "Z", "Z"]],
      top: 1,
      bottom: 2
    },
    270: {
      shape: [[0, 0, "Z"], [0, "Z", "Z"], [0, "Z", 0]],
      top: 0,
      bottom: 2
    },
    spawn: {
      x: -1,
      y: 4
    },
    color: "red"
  },
  O: {
    0: {
      shape: [["O", "O"], ["O", "O"]],
      top: 0,
      bottom: 1
    },
    90: {
      shape: [["O", "O"], ["O", "O"]],
      top: 0,
      bottom: 1
    },
    180: {
      shape: [["O", "O"], ["O", "O"]],
      top: 0,
      bottom: 1
    },
    270: {
      shape: [["O", "O"], ["O", "O"]],
      top: 0,
      bottom: 1
    },
    spawn: {
      x: 0,
      y: 4
    },
    color: "white"
  },
  S: {
    0: {
      shape: [[0, 0, 0], [0, "S", "S"], ["S", "S", 0]],
      top: 1,
      bottom: 2
    },
    90: {
      shape: [[0, "S", 0], [0, "S", "S"], [0, 0, "S"]],
      top: 0,
      bottom: 2
    },
    180: {
      shape: [[0, 0, 0], [0, "S", "S"], ["S", "S", 0]],
      top: 1,
      bottom: 2
    },
    270: {
      shape: [[0, "S", 0], [0, "S", "S"], [0, 0, "S"]],
      top: 0,
      bottom: 2
    },
    spawn: {
      x: -1,
      y: 4
    },
    color: "blueviolet"
  },
  L: {
    0: {
      shape: [[0, 0, 0], ["L", "L", "L"], ["L", 0, 0]],
      top: 1,
      bottom: 2
    },
    90: {
      shape: [["L", "L", 0], [0, "L", 0], [0, "L", 0]],
      top: 0,
      bottom: 2
    },
    180: {
      shape: [[0, 0, "L"], ["L", "L", "L"], [0, 0, 0]],
      top: 0,
      bottom: 1
    },
    270: {
      shape: [[0, "L", 0], [0, "L", 0], [0, "L", "L"]],
      top: 0,
      bottom: 2
    },
    spawn: {
      x: -1,
      y: 4
    },
    color: "red"
  },
  I: {
    0: {
      shape: [[0, 0, 0, 0], [0, 0, 0, 0], ["I", "I", "I", "I"], [0, 0, 0, 0]],
      top: 2,
      bottom: 2
    },
    90: {
      shape: [[0, 0, "I", 0], [0, 0, "I", 0], [0, 0, "I", 0], [0, 0, "I", 0]],
      top: 0,
      bottom: 3
    },
    180: {
      shape: [[0, 0, 0, 0], [0, 0, 0, 0], ["I", "I", "I", "I"], [0, 0, 0, 0]],
      top: 2,
      bottom: 2
    },
    270: {
      shape: [[0, 0, "I", 0], [0, 0, "I", 0], [0, 0, "I", 0], [0, 0, "I", 0]],
      top: 0,
      bottom: 3
    },
    spawn: {
      x: -2,
      y: 3
    },
    color: "white"
  }
};

export const RANDOM_PIECE = {
  0: "T",
  1: "J",
  2: "Z",
  3: "O",
  4: "S",
  5: "L",
  6: "I"
};
