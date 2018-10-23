import React from "react";

const Level = props => {
  return (
    <section className="level">
      <div className="section-header">LEVEL</div>
      <div className="section-text">
        {props.level.toString().padStart(2, 0)}
      </div>
    </section>
  );
};

export default Level;
