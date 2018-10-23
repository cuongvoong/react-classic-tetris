import React from "react";

const Lines = ({ lines }) => {
  return (
    <section className="lines">
      <span className="section-text">
        LINES-
        {lines.toString().padStart(3, "0")}
      </span>
    </section>
  );
};

export default Lines;
