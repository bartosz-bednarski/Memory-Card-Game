import React from "react";
import "./App.css";
import classes from "./main.module.scss";
import CardsBox from "./components/cardsBox/CardsBox";
function App() {
  return (
    <div className={classes.main}>
      <CardsBox />
    </div>
  );
}

export default App;
