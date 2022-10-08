import { useState } from "react";
import Square from "../Square";
import './style.css'
function Board() {
  const [player, setPlayer] = useState('X');
  const [step, setStep] = useState(0)
  const board = [
    ['', '', '', '', '', '', '', '', '']
  ];
  const handlePlayer = async (index) => {
    const b = board[step].map((item, ind) => ind !== index ? item : player);
    board.push(b);
    console.log(board);
    await setStep(prevStep => prevStep + 1);
    player === 'X' ? setPlayer('O') : setPlayer('X');
  }
  return (
    <>
      <p>Player: {player}</p>
      <section className="board">
        {
          board[step].map((item, index) =>
            <Square
              key={index}
              index={index}
              player={player}
              value={item}
              handlePlayer={handlePlayer} />
          )
        }
      </section>
    </>
  );
}

export default Board;
