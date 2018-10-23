import React from "react";

const ATypeLevel = ({ level, onLevelClick }) => {
  const handleClick = e => {
    onLevelClick(e.shiftKey ? level + 10 : level);
  };

  return (
    <div
      onClick={(e, level) => handleClick(e, level)}
      className="level-selection-numbers-item"
    >
      {level}
    </div>
  );
};

export default ATypeLevel;
