import { Board } from "./Board";
import { useState } from "react";


export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquare = history[history.length -1];

  function handlePlay() {

  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} currentSquare={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
}
