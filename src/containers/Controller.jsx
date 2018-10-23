import React, { Component } from "react";
import "./Controller.scss";
import { connect } from "react-redux";
import DPad from "../components/controller/DPad";
import ControllerButton from "../components/controller/ControllerButton";
import {
  up,
  down,
  left,
  right,
  b,
  a,
  select,
  start
} from "../actions/controllerActions";
import { KEYBOARD } from "../constants";

class Controller extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleUpButtonClick = () => {
    this.props.up();
  };

  handleDownButtonClick = () => {
    this.props.down(this.props.playfield, this.props.currentPiece);
  };

  handleLeftButtonClick = () => {
    this.props.left(this.props.playfield, this.props.currentPiece);
  };

  handleRightButtonClick = () => {
    this.props.right(this.props.playfield, this.props.currentPiece);
  };

  handleSelectButtonClick = () => {
    this.props.select();
  };

  handleStartButtonClick = () => {
    this.props.start();
    this.props.onStartButton();
  };

  handleBButtonClick = () => {
    this.props.b(this.props.playfield, this.props.currentPiece);
  };

  handleAButtonClick = () => {
    this.props.a(this.props.playfield, this.props.currentPiece);
  };

  handleKeyDown = e => {
    switch (e.keyCode) {
      case KEYBOARD.UP:
        this.handleUpButtonClick();
        break;
      case KEYBOARD.DOWN:
        this.handleDownButtonClick();
        break;
      case KEYBOARD.LEFT:
        this.handleLeftButtonClick();
        break;
      case KEYBOARD.RIGHT:
        this.handleRightButtonClick();
        break;
      case KEYBOARD.A:
        this.handleAButtonClick();
        break;
      case KEYBOARD.B:
        this.handleBButtonClick();
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <section className="controller">
        <DPad
          onUpButtonClick={() => this.handleUpButtonClick()}
          onDownButtonClick={() => this.handleDownButtonClick()}
          onLeftButtonClick={() => this.handleLeftButtonClick()}
          onRightButtonClick={() => this.handleRightButtonClick()}
        />
        <div className="select-start">
          <ControllerButton
            onButtonClick={() => this.handleSelectButtonClick()}
            class="select-button"
          />
          <ControllerButton
            onButtonClick={() => this.handleStartButtonClick()}
            class="start-button"
          />
        </div>
        <div className="b-a">
          <ControllerButton
            onButtonClick={() => this.handleBButtonClick()}
            class="b-button"
          />
          <ControllerButton
            onButtonClick={() => this.handleAButtonClick()}
            class="a-button"
          />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  playfield: state.playfield,
  currentPiece: state.currentPiece
});

export default connect(
  mapStateToProps,
  {
    up,
    down,
    left,
    right,
    b,
    a,
    select,
    start
  }
)(Controller);
