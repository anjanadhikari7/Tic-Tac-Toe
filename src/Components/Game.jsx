import React from "react";
import Board from "./Board";
import { Container } from "react-bootstrap";

function Game() {
  return (
    <Container className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">{/* Additional info can go here */}</div>
    </Container>
  );
}

export default Game;
