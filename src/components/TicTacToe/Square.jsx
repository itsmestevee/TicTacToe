import React from 'react';

function Square({ value, onClick }) {
  return (
    <button 
      className={`w-28 h-28 text-5xl font-bold rounded-lg shadow-md transition-all duration-200 ease-in-out
        ${value === 'X' ? 'bg-blue-700 text-white hover:bg-blue-800' : 
          value === 'O' ? 'bg-pink-700 text-white hover:bg-pink-800' : 
          'bg-gray-200 hover:bg-gray-300'}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;