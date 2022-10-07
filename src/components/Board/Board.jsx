import { useState } from "react";
import Square from "../Square";

function Board(){
  const [player, setPlayer]=useState('X');
  return(
    <Square player={player} />
  );
}

export default Board;
