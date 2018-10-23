import React, { Component } from "react";
import "./App.scss";
import GameEngine from "./GameEngine";
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  componentDidUpdate(prevProps) {
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

    if (
      prevProps.playfield.lock !== this.props.playfield.lock &&
      this.props.playfield.lock
    ) {
      const { nextPiece, currentPiece, playfield, level } = this.props;

      const fullLines = this.calculateLinesCleared();
      if (fullLines.length !== 0) {
        this.props.clearLines(playfield.grid, fullLines);

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

        this.props.updateLines(fullLines.length);
      }

      this.props.updatePieceStatistics(nextPiece.type);
      this.props.setCurrentPiece(nextPiece.type);
      this.props.generateNextPiece(currentPiece);
      this.props.unlock();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculateLinesCleared = () => {
    const fullLines = [];

    this.props.playfield.grid.forEach((row, index) => {
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

  handleStartButton = () => {
    const { gameState } = this.props;

    if (!gameState.started) {
      this.props.generateNextPiece(this.generateNextPiece());
    }
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GameEngine />
        </div>
      </Provider>
    );
  }
}

export default App;
