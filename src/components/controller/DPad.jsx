import React from "react";
import ControllerButton from "./ControllerButton";

const DPad = props => {
  const {
    onUpButtonClick,
    onDownButtonClick,
    onLeftButtonClick,
    onRightButtonClick
  } = props;

  return (
    <section className="d-pad">
      <div className="top-row">
        <div />
        <ControllerButton onButtonClick={onUpButtonClick} class="up-button" />
        <div />
      </div>
      <div className="middle-row">
        <ControllerButton
          onButtonClick={onLeftButtonClick}
          class="left-button"
        />
        <div />
        <ControllerButton
          onButtonClick={onRightButtonClick}
          class="right-button"
        />
      </div>
      <div className="bottom-row">
        <div />
        <ControllerButton
          onButtonClick={onDownButtonClick}
          class="down-button"
        />
        <div />
      </div>
    </section>
  );
};

export default DPad;
