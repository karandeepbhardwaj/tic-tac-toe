import { Board } from "./Board";
import { useState } from "react";

export default function Game() {
	const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const currentSquare = history[history.length - 1];
	const [currentMove, setCurrentMove] = useState(0);

	function handlePlay(nextSquares) {
		setHistory([...history, nextSquares]);
		setXIsNext(!xIsNext);
	}

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
		setXIsNext(nextMove % 2 == 0);
	}

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = "Go to move #" + move;
		} else {
			description = "Go to game start";
		}

		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
		<div className="game">
			<div></div>
			<div className="game-board">
				<Board
					xIsNext={xIsNext}
					squares={currentSquare}
					onPlay={handlePlay}
				/>
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
}
