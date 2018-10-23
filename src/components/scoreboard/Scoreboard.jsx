import React from "react";
import TopScore from "./TopScore";
import CurrentScore from "./CurrentScore";

const Scoreboard = ({ score }) => {
  const { top, current } = score;

  return (
    <section className="scoreboard">
      <TopScore score={top} />
      <CurrentScore score={current} />
    </section>
  );
};

export default Scoreboard;
