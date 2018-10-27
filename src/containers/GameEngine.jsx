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
import { gameStart, gameOver } from "../actions/gameStateActions";
import { generateNextPiece } from "../actions/nextPieceActions";
import { setCurrentPiece } from "../actions/currentPieceActions";
import { updatePieceStatistics } from "../actions/statisticsActions";
import { lockPiece, clearLines } from "../actions/playfieldActions";
import { setEntryDelay } from "../actions/lockActions";
import { updateLines } from "../actions/lineActions";
import { single, double, triple, tetris } from "../actions/scoreActions";
import { canMove } from "../currentPieceHelper";
import {
  calculateFramePerGridCell,
  calculateEntryDelay
} from "../gameEngineHelper";

class GameEngine extends Component {
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

  moveBlock = () => {
    const { playfield, currentPiece, level } = this.props;

    if (canMove(playfield, currentPiece, 1, 0)) {
      this.props.moveBlock(currentPiece);
    } else {
      if (currentPiece.x + currentPiece.top <= 0) {
        this.props.gameOver();
      } else {
        this.props.lockPiece(currentPiece);
        const entryDelayFrames = calculateEntryDelay(currentPiece);
        this.props.setEntryDelay(entryDelayFrames);

        const fullLines = this.calculateLinesCleared();
        if (fullLines.length !== 0) {
          this.props.updateLines(fullLines.length);
          this.props.clearLines(fullLines);

          switch (fullLines.length) {
            case 1:
              this.props.single(level);
              break;
            case 2:
              this.props.double(level);
              break;
            case 3:
              this.props.triple(level);
              break;
            case 4:
              this.props.tetris(level);
              break;
            default:
              break;
          }
        }
      }
    }
  };

  handleSetNextPiece = () => {
    const { nextPiece, currentPiece } = this.props;

    this.props.updatePieceStatistics(nextPiece.type);
    this.props.setCurrentPiece(nextPiece.type);
    this.props.generateNextPiece(currentPiece);
  };

  clearLock = () => {
    this.props.clearLock();
  };

  calculateLinesCleared = () => {
    const fullLines = [];

    this.props.playfield.forEach((row, index) => {
      if (
        row.every(value => {
          return value !== 0;
        })
      ) {
        fullLines.push(index);
      }
    });

    return fullLines;
  };

  render() {
    const {
      level,
      gameState,
      currentPiece,
      nextPiece,
      score,
      lines,
      statistics,
      lock
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
                      gameState={gameState}
                      framesPerGridCell={calculateFramePerGridCell(level)}
                      onMoveBlock={() => this.moveBlock()}
                      entryDelayFrames={lock.entryDelayFrames}
                      onSetNextPiece={() => this.handleSetNextPiece()}
                      onClearLock={() => this.clearLock()}
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
  statistics: state.statistics,
  playfield: state.playfield,
  lock: state.lock
});

export default connect(
  mapStateToProps,
  {
    gameStart,
    gameOver,
    generateNextPiece,
    setCurrentPiece,
    updatePieceStatistics,
    lockPiece,
    setEntryDelay,
    updateLines,
    clearLines,
    single,
    double,
    triple,
    tetris
  }
)(GameEngine);
