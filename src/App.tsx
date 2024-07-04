import React, { useEffect, useState } from "react";
import "./App.css";
import classes from "./main.module.scss";
import CardsBox from "./components/cardsBox/CardsBox";
import DetailsBox from "./components/detailsBox/DetailsBox";
function App() {
  const [restart, setRestart] = useState(false);
  useEffect(() => {}, [restart]);
  return (
    <div className={classes.main}>
      <CardsBox restart={restart} onRestartComplete={() => setRestart(false)} />
      <DetailsBox onSetRestart={() => setRestart(true)} />
    </div>
  );
}

export default App;
