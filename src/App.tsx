import React, { useEffect, useState } from "react";
import "./App.css";
import classes from "./main.module.scss";
import CardsBox from "./components/cardsBox/CardsBox";
import DetailsBox from "./components/detailsBox/DetailsBox";
function App() {
  const [restart, setRestart] = useState(false);
  const [numberOfMoves, setNumberOfMoves] = useState(0);
  const setNumberOfMovesHandler = () => {
    setNumberOfMoves((state) => (state += 1));
  };
  const restartTheGameHandler = () => {
    setRestart(true);
    setNumberOfMoves(0);
  };
  // useEffect(() => {}, [restart]);
  console.log(numberOfMoves);
  return (
    <div className={classes.main}>
      <CardsBox
        restart={restart}
        onRestartComplete={() => setRestart(false)}
        onSetNumberOfMoves={setNumberOfMovesHandler}
      />
      <DetailsBox
        onSetRestart={restartTheGameHandler}
        numberOfMoves={numberOfMoves}
      />
    </div>
  );
}

export default App;
