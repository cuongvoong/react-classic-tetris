import React from "react";
import T from "../statistics/T";
import O from "../statistics/O";
import I from "../statistics/I";
import L from "../statistics/L";
import Z from "../statistics/Z";
import J from "../statistics/J";
import S from "../statistics/S";

const Next = ({ nextPiece }) => {
  let next;

  switch (nextPiece.type) {
    case "T":
      next = <T />;
      break;
    case "J":
      next = <J />;
      break;
    case "Z":
      next = <Z />;
      break;
    case "O":
      next = <O />;
      break;
    case "S":
      next = <S />;
      break;
    case "L":
      next = <L />;
      break;
    case "I":
      next = <I />;
      break;
    default:
      break;
  }

  return (
    <section className="next">
      <div className="section-header">NEXT</div>
      <div style={{ height: 50 }}>{next}</div>
    </section>
  );
};

export default Next;
