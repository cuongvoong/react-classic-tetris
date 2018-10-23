import React from "react";
import "./Leaderboard.scss";

const Leaderboard = props => {
  const top3 = props.leaderboard.map((player, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{player.name}</td>
        <td>{player.score}</td>
        <td>{player.level}</td>
      </tr>
    );
  });

  return (
    <section className="leaderboard">
      <table>
        <thead>
          <tr>
            <th />
            <th className="th-name">NAME</th>
            <th className="th-score">SCORE</th>
            <th className="th-level">LV</th>
          </tr>
        </thead>
        <tbody>{top3}</tbody>
      </table>
    </section>
  );
};

export default Leaderboard;
