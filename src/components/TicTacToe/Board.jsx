import React, { useState } from 'react';
import Square from './Square';
import { calculateWinner } from './utils';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every(square => square)) {
    status = 'Draw';
  } else {
    status = (
      <span>
        Next player: <span className={xIsNext ? 'text-blue-700' : 'text-pink-700'}>{xIsNext ? 'X' : 'O'}</span>
      </span>
    );
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="w-96">
      <div className="text-3xl mb-6 text-center text-gray-800">{status}</div>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {squares.map((value, i) => (
          <Square key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </div>
      <button 
        onClick={resetGame}
        className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800"
      >
        Reset Game
      </button>
    </div>
  );
}

export default Board;