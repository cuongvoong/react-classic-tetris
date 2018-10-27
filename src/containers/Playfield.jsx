import React, { PureComponent } from "react";
import { connect } from "react-redux";
import config from "../config";
import { dropOneRow, setCurrentPiece } from "../actions/currentPieceActions";
import { lockPiece, clearLines } from "../actions/playfieldActions";
import { canMove } from "../currentPieceHelper";
import { updatePieceStatistics } from "../actions/statisticsActions";
import { gameOver } from "../actions/gameStateActions";
import { GAME_STATE, PIECE } from "../constants";
import {
  calculateFramePerGridCell,
  calculateEntryDelay
} from "../playfieldHelper";

class Playfield extends PureComponent {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
    this.frameCounter = 0;
    this.framesPerGridCell = calculateFramePerGridCell(this.props.level);
    this.entryDelay = false;
    this.entryDelayFramesCounter = 0;

    this.linesClearedArray = null;
    this.clearedLines = false;
    this.clearIndex = 0;
    this.animationFrameCounter = 0;

    this.newPlayfield = [];

    this.myReq = null;
  }
  state = {
    context: null
  };

  componentDidMount() {
    this.setState({
      context: this.canvas.current.getContext("2d")
    });
    this.myReq = requestAnimationFrame(timestamp => this.mainLoop(timestamp));
  }

  mainLoop = timestamp => {
    const { currentPiece } = this.props;

    //Game over, stop animation
    if (this.props.gameState === GAME_STATE.GameOver) {
      cancelAnimationFrame(this.myReq);
      return;
    }

    if (this.clearedLines) {
      this.clearBackground();
      this.drawGrid();
      this.drawPlayfieldWithAnimation(this.linesClearedArray, this.clearIndex);

      if (this.animationFrameCounter === 4) {
        this.clearIndex++;
        if (this.clearIndex === 5) {
          this.clearIndex = 0;
          this.clearedLines = false;
          this.props.clearLines(this.linesClearedArray);
          this.props.onUpdateScore(this.linesClearedArray.length);
        }
        this.animationFrameCounter = 0;
      }

      this.animationFrameCounter++;
    }

    //Locked piece to playfield, start entry delay
    else if (this.entryDelay) {
      if (this.entryDelayFramesCounter === this.entryDelayFrames) {
        this.props.onNextLoop();
        this.entryDelayFramesCounter = 0;
        this.entryDelay = false;
      }
      this.entryDelayFramesCounter++;

      this.clearBackground();
      this.drawGrid();
      this.drawPlayfield();
    } else {
      this.clearBackground();

      if (this.frameCounter === this.framesPerGridCell) {
        if (this.canPieceMoveOneRow()) {
          this.props.dropOneRow();
        } else {
          //Current piece reached top of playfield
          if (currentPiece.x + currentPiece.top <= 0) {
            this.props.gameOver();
          } else {
            //Piece cannot move down, lock piece to playfield
            //Start entry delay
            this.entryDelay = true;
            this.entryDelayFrames = calculateEntryDelay(currentPiece);
            this.props.lockPiece(currentPiece);
            this.linesClearedArray = this.linesCleared();

            if (this.linesClearedArray.length > 0) {
              this.clearedLines = true;

              for (let i = 0; i < this.props.playfield.length; i++) {
                this.newPlayfield[i] = this.props.playfield[i].slice();
              }
            }
          }
        }
        this.frameCounter = 0;
      }

      this.frameCounter++;

      this.drawGrid();
      this.drawPlayfield();
      this.drawCurrentShape();
    }

    this.myReq = requestAnimationFrame(timestamp => this.mainLoop(timestamp));
  };

  canPieceMoveOneRow = () => {
    const { playfield, currentPiece } = this.props;
    if (canMove(playfield, currentPiece, 1, 0)) {
      return true;
    }
    return false;
  };

  linesCleared = () => {
    const { playfield, currentPiece } = this.props;
    const start = currentPiece.x + currentPiece.top;
    const end = currentPiece.x + currentPiece.bottom;
    const linesCleared = [];

    for (let i = start; i <= end; i++) {
      if (
        playfield[i].every(value => {
          return value !== 0;
        })
      ) {
        linesCleared.push(i);
      }
    }

    return linesCleared;
  };

  clearBackground = () => {
    const context = this.state.context;
    context.fillStyle = "#000";
    context.fillRect(
      0,
      0,
      this.canvas.current.width,
      this.canvas.current.height
    );
  };

  drawGrid = () => {
    const ctx = this.state.context;
    const canvas = this.canvas.current;

    const width = canvas.width;
    const height = canvas.height;

    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.moveTo(0, height);
    ctx.lineTo(width, height);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);
    ctx.moveTo(width, 0);
    ctx.lineTo(width, height);
    ctx.stroke();
  };

  drawPlayfield = () => {
    const ctx = this.state.context;
    const { playfield } = this.props;
    const rows = playfield.length;

    for (let i = 0; i < rows; i++) {
      const columns = playfield[i].length;
      for (let j = 0; j < columns; j++) {
        const x = j * config.playfield.blockSize;
        const y = i * config.playfield.blockSize;
        if (playfield[i][j] !== 0) {
          ctx.fillStyle = PIECE[playfield[i][j]].color;
          ctx.fillRect(
            x,
            y,
            config.playfield.blockSize,
            config.playfield.blockSize
          );
          ctx.strokeStyle = "#000";
          ctx.strokeRect(
            x,
            y,
            config.playfield.blockSize,
            config.playfield.blockSize
          );
        }
      }
    }
  };

  drawPlayfieldWithAnimation = (linesClearedArray, clearIndex) => {
    const ctx = this.state.context;

    const rows = this.newPlayfield.length;

    for (let i = 0; i < rows; i++) {
      if (linesClearedArray.indexOf(i) !== -1) {
        const newRow = [
          ...this.newPlayfield[i].slice(0, 4 - clearIndex),
          ...Array((clearIndex + 1) * 2).fill(0),
          ...this.newPlayfield[i].slice(5 + clearIndex, 9)
        ];

        this.newPlayfield[i] = newRow;
      }
      const columns = this.newPlayfield[i].length;
      for (let j = 0; j < columns; j++) {
        const x = j * config.playfield.blockSize;
        const y = i * config.playfield.blockSize;
        if (this.newPlayfield[i][j] !== 0) {
          ctx.fillStyle = PIECE[this.newPlayfield[i][j]].color;
          ctx.fillRect(
            x,
            y,
            config.playfield.blockSize,
            config.playfield.blockSize
          );
          ctx.strokeStyle = "#000";
          ctx.strokeRect(
            x,
            y,
            config.playfield.blockSize,
            config.playfield.blockSize
          );
        }
      }
    }
  };

  drawCurrentShape = () => {
    const ctx = this.state.context;
    const { shape, x: curX, y: curY } = this.props.currentPiece;
    const rows = shape.length;

    for (let i = 0; i < rows; i++) {
      const columns = shape[i].length;
      for (let j = 0; j < columns; j++) {
        const x = (j + curY) * config.playfield.blockSize;
        const y = (i + curX) * config.playfield.blockSize;
        if (shape[i][j] !== 0) {
          ctx.fillStyle = PIECE[this.props.currentPiece.type].color;
          ctx.fillRect(
            x,
            y,
            config.playfield.blockSize,
            config.playfield.blockSize
          );
          ctx.strokeStyle = "#000";
          ctx.strokeRect(
            x,
            y,
            config.playfield.blockSize,
            config.playfield.blockSize
          );
        }
      }
    }
  };

  render() {
    return (
      <section className="playfield">
        <canvas ref={this.canvas} width="300" height="600" />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  playfield: state.playfield,
  level: state.level,
  currentPiece: state.currentPiece,
  nextPiece: state.nextPiece,
  lock: state.lock
});

export default connect(
  mapStateToProps,
  {
    dropOneRow,
    setCurrentPiece,
    lockPiece,
    updatePieceStatistics,
    gameOver,
    clearLines
  }
)(Playfield);
