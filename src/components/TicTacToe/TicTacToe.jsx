import React from 'react';
import Board from './Board';

function TicTacToe() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Tic Tac Toe</h2>
        <Board />
      </div>
    </div>
  );
}

export default TicTacToe;