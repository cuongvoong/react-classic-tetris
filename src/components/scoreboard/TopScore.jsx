import React from "react";

const TopScore = props => {
  return (
    <section className="top-score">
      <div className="section-header">TOP</div>
      <span className="section-text">{props.score}</span>
    </section>
  );
};

export default TopScore;
