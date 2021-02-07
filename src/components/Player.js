import React from "react";
import "./Player.css";

function Player({ name, player }) {
  return (
    <div className="playerContainer">
      <img className="selectorImgL" src={`./images/${player}.jpg`} alt={name} />
      <img
        className="playerImg"
        src={`./images/players/large/${name}.jpg`}
        alt={name}
      />
    </div>
  );
}

export default Player;
