import React from "react";
import "./PlayerPicto.css";

function PlayerPicto({ name, player, playerSelected, selected }) {
  const handleClick = () => {
    playerSelected(name);
  };

  return (
    <div className="pictoContainer">
      {selected ? (
        <img
          className="selectorImg"
          src={`./images/${player}-select.png`}
          alt={player}
        />
      ) : null}
      <img
        className="picto"
        src={`./images/players/tiny/${name}.jpg`}
        alt={name}
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default PlayerPicto;
