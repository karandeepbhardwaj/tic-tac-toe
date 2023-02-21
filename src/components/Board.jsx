import Square from "./Square";
import calculateWinner from "./Utility";

const board = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
];

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
			{board.map((row, i) => {
				return (
					<div className="board-row" key={i}>
						{row.map((index) => {
							return (
								<Square
									key={index}
									value={squares[index]}
									onSqaureClick={() => {
										handleClick(index);
									}}
								/>
							);
						})}
					</div>
				);
			})}
		</>
	);
}
