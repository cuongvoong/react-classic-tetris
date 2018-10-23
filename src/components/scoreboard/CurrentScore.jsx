import React from "react";

const CurrentScore = props => {
  return (
    <section className="current-score">
      <div className="section-header">SCORE</div>
      <span className="section-text">{props.score}</span>
    </section>
  );
};

export default CurrentScore;
