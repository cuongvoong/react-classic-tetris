import React from "react";

const ControllerButton = props => {
  const handleClick = () => {
    props.onButtonClick();
  };

  return (
    <div onClick={handleClick} className={props.class}>
      {props.children}
    </div>
  );
};

export default ControllerButton;
