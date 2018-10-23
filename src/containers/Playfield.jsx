import React, { PureComponent } from "react";
import { connect } from "react-redux";

class Playfield extends PureComponent {
  createPlayfieldWithCurrentPiece = () => {
    const { playfield, currentPiece } = this.props;
    const playfieldWithCurrentPiece = [];

    //For every row in the grid
    for (let i = 0; i < playfield.length; i++) {
      const row = [];
      //For every element in the grid row
      for (let j = 0; j < playfield[i].length; j++) {
        //If current row is between current piece's X position
        if (
          i >= currentPiece.x &&
          i <= currentPiece.x + currentPiece.shape.length - 1
        ) {
          // If current element between current piece's Y position
          if (
            j >= currentPiece.y &&
            j <=
              currentPiece.shape[i - currentPiece.x].length - 1 + currentPiece.y
          ) {
            row.push(
              currentPiece.shape[i - currentPiece.x][j - currentPiece.y] ||
                playfield[i][j]
            );
          } else {
            row.push(playfield[i][j]);
          }
        } else {
          row.push(playfield[i][j]);
        }
      }
      playfieldWithCurrentPiece.push(row);
    }

    return playfieldWithCurrentPiece;
  };

  render() {
    const playfieldGrid = this.createPlayfieldWithCurrentPiece().map(
      (row, index) => {
        return (
          <div key={index} className="playfield-row">
            {row.map((column, index) => {
              return <div key={index} className={`cell ${column}`} />;
            })}
          </div>
        );
      }
    );

    return <section className="playfield">{playfieldGrid}</section>;
  }
}

const mapStateToProps = state => ({
  playfield: state.playfield,
  level: state.level
});

export default connect(
  mapStateToProps,
  {}
)(Playfield);
