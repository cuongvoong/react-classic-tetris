import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { setCurrentPiece } from "../actions/currentPieceActions";
import { gameOver, gameStart } from "../actions/gameStateActions";
import { updateLines } from "../actions/lineActions";
import { setEntryDelay } from "../actions/lockActions";
import { generateNextPiece } from "../actions/nextPieceActions";
import { clearLines, lockPiece } from "../actions/playfieldActions";
import { double, single, tetris, triple } from "../actions/scoreActions";
import { updatePieceStatistics } from "../actions/statisticsActions";
import AType from "../components/AType";
import Level from "../components/level/Level";
import Lines from "../components/lines/Lines";
import Next from "../components/next/Next";
import Scoreboard from "../components/scoreboard/Scoreboard";
import Statistics from "../components/statistics/Statistics";
import store from "../store";
import "./App.scss";
import Controller from "./Controller";
import Playfield from "./Playfield";
import { GAME_STATE } from "../constants";

class App extends Component {
  componentDidMount() {
    this.props.generateNextPiece(this.props.currentPiece);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.gameState === GAME_STATE.LevelSelection &&
      this.props.gameState === GAME_STATE.Playing
    ) {
      const { nextPiece, currentPiece } = this.props;
      this.props.setCurrentPiece(nextPiece.type);
      this.props.updatePieceStatistics(nextPiece.type);
      this.props.generateNextPiece(currentPiece);
    }
  }

  handleNextLoop = () => {
    const { nextPiece, currentPiece } = this.props;
    this.props.updatePieceStatistics(nextPiece.type);
    this.props.setCurrentPiece(nextPiece.type);
    this.props.generateNextPiece(currentPiece);
  };

  handleGameStart = () => {
    this.props.gameStart();
  };

  handleUpdateScore = linesCleared => {
    const { level } = this.props;
    switch (linesCleared) {
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
        <div className="App">
          <Provider store={store}>
            <div className="game">
              {level === null && (
                <AType onGameStart={() => this.handleGameStart()} />
              )}
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
                          onMoveBlock={() => this.moveBlock()}
                          entryDelayFrames={lock.entryDelayFrames}
                          onNextLoop={() => this.handleNextLoop()}
                          onUpdateScore={linesCleared =>
                            this.handleUpdateScore(linesCleared)
                          }
                        />
                      </section>
                      <section className="column-scoreboard-next-level">
                        <Scoreboard score={score} />
                        <Next nextPiece={nextPiece} />
                        <Level level={level} />
                      </section>
                    </div>

                    <section className="controls">
                      <Controller
                        onStartButton={() => this.handleStartButton()}
                      />
                    </section>
                  </React.Fragment>
                )}
            </div>
          </Provider>
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
)(App);
