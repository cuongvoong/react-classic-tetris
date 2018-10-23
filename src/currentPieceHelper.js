import { PIECE } from "./constants";

const calculateSpacesWanted = (currentPiece, x, y) => {
  const wanted = [];

  const { x: curX, y: curY, shape } = currentPiece;

  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < shape[i].length; j++) {
      if (shape[i][j] !== 0) {
        wanted.push([curX + x + i, curY + y + j]);
      }
    }
  }

  return wanted;
};

export const canMove = (playfield, currentPiece, x, y) => {
  const wantedSpaces = calculateSpacesWanted(currentPiece, x, y);

  if (hasCollision(playfield, wantedSpaces)) {
    return false;
  }

  return true;
};

export const canRotate = (playfield, currentPiece, degree) => {
  const { type, rotation, x, y } = currentPiece;

  let newRotation = rotation + degree;
  if (newRotation === -90) {
    newRotation = 270;
  }

  if (newRotation === 360) {
    newRotation = 0;
  }

  const afterRotation = {
    shape: PIECE[type][newRotation].shape,
    x,
    y
  };

  const wantedSpaces = calculateSpacesWanted(afterRotation, 0, 0);

  if (hasCollision(playfield, wantedSpaces)) {
    return false;
  }

  return true;
};

const hasCollision = (playfield, wantedSpaces) => {
  for (let i = 0; i < wantedSpaces.length; i++) {
    if (wantedSpaces[i][0] > 19) {
      return true;
    }

    if (wantedSpaces[i][1] < 0 || wantedSpaces[i][1] > 9) {
      return true;
    }

    if (wantedSpaces[i][0] >= 0) {
      if (playfield[wantedSpaces[i][0]][wantedSpaces[i][1]] !== 0) {
        return true;
      }
    }
  }

  return false;
};
