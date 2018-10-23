import React, { Component } from "react";
import GameType from "./GameType";
import MusicType from "./MusicType";

class GameMusicType extends Component {
  state = {};
  render() {
    return (
      <div className="game-music-type">
        <GameType />
        <MusicType />
      </div>
    );
  }
}

export default GameMusicType;
