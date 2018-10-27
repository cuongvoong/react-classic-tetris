export const calculateFramePerGridCell = level => {
  if (level === 0) return 48;
  else if (level === 1) return 43;
  else if (level === 2) return 38;
  else if (level === 3) return 33;
  else if (level === 4) return 28;
  else if (level === 5) return 23;
  else if (level === 6) return 18;
  else if (level === 7) return 13;
  else if (level === 8) return 8;
  else if (level === 9) return 6;
  else if (level >= 10 && level <= 12) return 5;
  else if (level >= 13 && level <= 15) return 4;
  else if (level >= 16 && level <= 18) return 3;
  else if (level >= 19 && level <= 28) return 2;
  else return 1;
};

export const calculateEntryDelay = currentPiece => {
  if (
    currentPiece.x + currentPiece.bottom >= 18 &&
    currentPiece.x + currentPiece.bottom <= 19
  ) {
    return 10;
  } else if (
    currentPiece.x + currentPiece.bottom >= 14 &&
    currentPiece.x + currentPiece.bottom <= 17
  ) {
    return 12;
  } else if (
    currentPiece.x + currentPiece.bottom >= 10 &&
    currentPiece.x + currentPiece.bottom <= 13
  ) {
    return 14;
  } else if (
    currentPiece.x + currentPiece.bottom >= 6 &&
    currentPiece.x + currentPiece.bottom <= 9
  ) {
    return 16;
  } else if (
    currentPiece.x + currentPiece.bottom >= 2 &&
    currentPiece.x + currentPiece.bottom <= 5
  ) {
    return 18;
  } else {
    return 20;
  }
};

export const calculateLinesCleared = () => {
  const fullLines = [];

  this.props.playfield.forEach((row, index) => {
    if (
      row.every(value => {
        return value !== 0;
      })
    ) {
      fullLines.push(index);
    }
  });

  return fullLines;
};
