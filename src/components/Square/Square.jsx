import './style.css'
function Square({ player }) {
  // console.log(props);
  return (
    <div className="square">
      {player}
    </div>
  );
}

export default Square;
