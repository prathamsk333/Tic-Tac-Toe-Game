
export default function GameBoard({ onSelectSquare, board }) {


  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   function handleSquare(row, col) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [...prevGameBoard.map((ele) => [...ele])];
  //       updatedBoard[row][col] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, eleIndex) => (
        <li key={eleIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(eleIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
