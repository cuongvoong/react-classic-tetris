import React, { Component } from "react";
import { connect } from "react-redux";
import Leaderboard from "./Leaderboard";
import "./AType.scss";
import ATypeLevel from "./ATypeLevel";
import { setLevel } from "../actions/levelActions";

class AType extends Component {
  handleLevelClick = level => {
    this.props.setLevel(level);
    this.props.onGameStart();
  };

  render() {
    const { leaderboard } = this.props;

    const levels = Array(10)
      .fill()
      .map((_, i) => {
        return (
          <ATypeLevel
            key={i}
            level={i}
            onLevelClick={level => this.handleLevelClick(level)}
          />
        );
      });

    return (
      <div className="a-type">
        <section className="level-selection">
          <div className="level-selection-header">
            <h2>LEVEL</h2>
          </div>
          <div className="level-selection-numbers">{levels}</div>
        </section>
        <Leaderboard leaderboard={leaderboard} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  leaderboard: state.leaderboard
});

export default connect(
  mapStateToProps,
  { setLevel }
)(AType);
