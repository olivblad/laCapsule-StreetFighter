import React, { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import PlayerPicto from "./components/PlayerPicto";
import { players } from "./players";

function App() {
  const [currentPlayer, setcurrentPlayer] = useState(1);
  const [playerOneSelected, setplayerOneSelected] = useState(null);
  const [playerTwoSelected, setplayerTwoSelected] = useState(null);

  //Function to update state after P1 is selected
  const playerSelected = (name) => {
    if (currentPlayer === 1) {
      setcurrentPlayer(2);
      setplayerOneSelected(name);
    } else {
      setplayerTwoSelected(name);
    }
  };

  //Function to get able to (re)select Player 1
  const selectPlayerOne = () => {
    setcurrentPlayer(1);
  };

  //Function to get able to (re)select Player 2
  const selectPlayerTwo = () => {
    setcurrentPlayer(2);
  };

  //Filling P1 component with data after selection
  var playerOne;
  if (playerOneSelected) {
    playerOne = <Player name={playerOneSelected} player="1p" />;
  }

  //Filling P2 component with data after selection
  var playerTwo;
  if (playerTwoSelected) {
    playerTwo = <Player name={playerTwoSelected} player="2p" />;
  }

  //Filling Picto Components with Fighters
  let row1 = players.slice(0, players.length / 2).map((player) => {
    let p;
    if (playerOneSelected === player) {
      p = "1p";
    } else if (playerTwoSelected) {
      p = "2p";
    }
    let selected =
      playerOneSelected === player || playerTwoSelected === player
        ? true
        : false;
    return (
      <PlayerPicto
        key={player}
        name={player}
        player={p}
        playerSelected={playerSelected}
        selected={selected}
      />
    );
  });
  let row2 = players.slice(players.length / 2).map((player) => {
    let p;
    if (playerOneSelected === player) {
      p = "1p";
    } else if (playerTwoSelected) {
      p = "2p";
    }
    let selected =
      playerOneSelected === player || playerTwoSelected === player
        ? true
        : false;
    return (
      <PlayerPicto
        key={player}
        name={player}
        player={p}
        playerSelected={playerSelected}
        selected={selected}
      />
    );
  });

  return (
    <div className="fullContainer">
      <div className="playerOne">{playerOne}</div>
      <div className="header">
        <img className="banner" src="./images/player-select.jpg" alt="banner" />
        <div className="portfolioContainer">
          <div className="rowPortfolio">{row1}</div>
          <div className="rowPortfolio">{row2}</div>
          <div className="playerSelectionContainer">
            <div className="selectionMsg">{`Select Player : ${currentPlayer}`}</div>
            <div className="btnContainer">
              <img
                className={
                  currentPlayer === 1 ? "selectBtn active" : "selectBtn"
                }
                src="./images/1p.jpg"
                alt="p1-select-btn"
                onClick={() => selectPlayerOne()}
              />
              <img
                className={
                  currentPlayer === 2 ? "selectBtn active" : "selectBtn"
                }
                src="./images/2p.jpg"
                alt="p2-select-btn"
                onClick={() => selectPlayerTwo()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="playerTwo">{playerTwo}</div>
    </div>
  );
}

export default App;
