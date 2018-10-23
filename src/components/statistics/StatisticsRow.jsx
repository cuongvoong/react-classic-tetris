import React from "react";

const StatisticsRow = props => {
  return (
    <tr className="statistics-row">
      <td>
        <div className="piece">{props.piece}</div>
      </td>
      <td>
        <span className="counter">
          {props.statistic.toString().padStart(3, "0")}
        </span>
      </td>
    </tr>
  );
};

export default StatisticsRow;
