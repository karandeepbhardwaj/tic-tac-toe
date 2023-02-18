import { Board } from "./Board";
import { useState } from "react";


export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  let currentSquare;

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
}
