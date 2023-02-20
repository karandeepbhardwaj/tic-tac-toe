import Square from "./Square";
import calculateWinner from "./Utility";

export function Board({ xIsNext, squares, onPlay }) {
	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		onPlay(nextSquares);
	}

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next Player: " + (xIsNext ? "X" : "O");
	}

	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square
					value={squares[0]}
					onSqaureClick={() => {
						handleClick(0);
					}}
				/>
				<Square
					value={squares[1]}
					onSqaureClick={() => {
						handleClick(1);
					}}
				/>
				<Square
					value={squares[2]}
					onSqaureClick={() => {
						handleClick(2);
					}}
				/>
			</div>
			<div className="board-row">
				<Square
					value={squares[3]}
					onSqaureClick={() => {
						handleClick(3);
					}}
				/>
				<Square
					value={squares[4]}
					onSqaureClick={() => {
						handleClick(4);
					}}
				/>
				<Square
					value={squares[5]}
					onSqaureClick={() => {
						handleClick(5);
					}}
				/>
			</div>
			<div className="board-row">
				<Square
					value={squares[6]}
					onSqaureClick={() => {
						handleClick(6);
					}}
				/>
				<Square
					value={squares[7]}
					onSqaureClick={() => {
						handleClick(7);
					}}
				/>
				<Square
					value={squares[8]}
					onSqaureClick={() => {
						handleClick(8);
					}}
				/>
			</div>
		</>
	);
}
