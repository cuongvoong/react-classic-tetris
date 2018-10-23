import React, { Component } from "react";

class CurrentPiece extends Component {
  state = {};
  render() {
    return <div className="current-piece">{this.props.type}</div>;
  }
}

export default CurrentPiece;
