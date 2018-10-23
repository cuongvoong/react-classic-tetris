import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import AType from "../components/AType";
import store from "../store";
import Controller from "./Controller";
import "./GameEngine.scss";
import Level from "../components/level/Level";
import Lines from "../components/lines/Lines";
import Next from "../components/next/Next";
import Playfield from "./Playfield";
import Scoreboard from "../components/scoreboard/Scoreboard";
import Statistics from "../components/statistics/Statistics";
import { gameStart } from "../actions/gameStateActions";
import { generateNextPiece } from "../actions/nextPieceActions";
import { setCurrentPiece, moveBlock } from "../actions/currentPieceActions";
import { updatePieceStatistics } from "../actions/statisticsActions";

class GameEngine extends Component {
  constructor(props) {
    super(props);

    this.moveInterval = null;
  }

  componentDidMount() {
    // this.moveInterval = setInterval(() => {
    //   this.props.moveBlock(this.props.playfield, this.props.currentPiece);
    // }, (this.calculateFramePerGridCell() / 60) * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.moveInterval);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.level !== this.props.level && this.props.level !== null) {
      this.props.gameStart();
    }

    if (!prevProps.gameState.running && this.props.gameState.running) {
      this.props.generateNextPiece(this.props.currentPiece);
    }

    if (
      prevProps.nextPiece !== this.props.nextPiece &&
      this.props.currentPiece.type === null
    ) {
      const { nextPiece, currentPiece } = this.props;
      this.props.updatePieceStatistics(nextPiece.type);
      this.props.setCurrentPiece(nextPiece.type);
      this.props.generateNextPiece(currentPiece);
    }

    if (this.props.gameState.over) {
      clearInterval(this.moveInterval);
    }
  }

  calculateFramePerGridCell = () => {
    const { level } = this.props;
    if (level === 0) return 48;
    else if (level === 1) return 43;
    else if (level === 2) return 38;
    else if (level === 3) return 33;
    else if (level === 4) return 28;
    else if (level === 5) return 23;
    else if (level === 6) return 18;
    else if (level === 7) return 13;
    else if (level === 8) return 8;
    else if (level === 9) return 6;
    else if (level >= 10 && level <= 12) return 5;
    else if (level >= 13 && level <= 15) return 4;
    else if (level >= 16 && level <= 18) return 3;
    else if (level >= 19 && level <= 28) return 2;
    else return 1;
  };

  render() {
    const {
      level,
      gameState,
      currentPiece,
      nextPiece,
      score,
      lines,
      statistics
    } = this.props;

    return (
      <Provider store={store}>
        <div className="game">
          {level === null && <AType />}
          {level !== null &&
            currentPiece.type !== null && (
              <React.Fragment>
                <div className="game-wrapper">
                  <section className="column-statistics">
                    <Statistics statistics={statistics} />
                  </section>
                  <section className="column-lines-playfield">
                    <Lines lines={lines} />
                    <Playfield
                      level={level}
                      gameState={gameState}
                      currentPiece={currentPiece}
                    />
                  </section>
                  <section className="column-scoreboard-next-level">
                    <Scoreboard score={score} />
                    <Next nextPiece={nextPiece} />
                    <Level level={level} />
                  </section>
                </div>

                <section className="controls">
                  <Controller onStartButton={() => this.handleStartButton()} />
                </section>
              </React.Fragment>
            )}
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState,
  level: state.level,
  currentPiece: state.currentPiece,
  nextPiece: state.nextPiece,
  lines: state.lines,
  score: state.score,
  statistics: state.statistics
});

export default connect(
  mapStateToProps,
  {
    gameStart,
    generateNextPiece,
    setCurrentPiece,
    updatePieceStatistics,
    moveBlock
  }
)(GameEngine);
