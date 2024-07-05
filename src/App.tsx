import React, { useState } from "react";
import "./App.css";
import classes from "./main.module.scss";
import CardsBox from "./components/cardsBox/CardsBox";
import DetailsBox from "./components/detailsBox/DetailsBox";
import { Card, GameTypes } from "./types/games";
import { game4x4, game4x5, game4x6 } from "./utils/data/gamesTypes";
function App() {
  const [restart, setRestart] = useState(false);
  const [numberOfMoves, setNumberOfMoves] = useState(0);
  const [gameType, setGameType] = useState<{ title: GameTypes; data: Card[] }>({
    title: "4x4",
    data: game4x4,
  });
  const [gameWon, setGameWon] = useState(false);
  const setNumberOfMovesHandler = () => {
    setNumberOfMoves((state) => (state += 1));
  };
  const restartTheGameHandler = () => {
    setRestart(true);
    setGameWon(false);
    setNumberOfMoves(0);
  };
  const setGameTypeHandler: (type: GameTypes) => void = (type) => {
    if (type === "4x4") {
      setGameWon(false);
      setGameType({ title: "4x4", data: game4x4 });
    }
    if (type === "4x5") {
      setGameWon(false);
      setGameType({ title: "4x5", data: game4x5 });
    }
    if (type === "4x6") {
      setGameWon(false);
      setGameType({ title: "4x6", data: game4x6 });
    }
  };
  return (
    <div className={classes.main}>
      <CardsBox
        restart={restart}
        onRestartComplete={() => setRestart(false)}
        onSetNumberOfMoves={setNumberOfMovesHandler}
        gameType={gameType}
        onSetGameWon={() => setGameWon(true)}
      />
      <DetailsBox
        onSetRestart={restartTheGameHandler}
        numberOfMoves={numberOfMoves}
        onSetGameType={setGameTypeHandler}
        restart={restart}
        gameWon={gameWon}
      />
    </div>
  );
}

export default App;
