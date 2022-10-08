import { useState } from 'react';
import './style.css'
function Square({ player, value, handlePlayer, index }) {
  const [text, setText] = useState(value);
  const handleText = () => {
    text === '' && setText(player);
    text === '' && handlePlayer(index);
  };
  return (
    <div className="square" onClick={() => handleText()}>
      {text}
    </div>
  );
}

export default Square;
