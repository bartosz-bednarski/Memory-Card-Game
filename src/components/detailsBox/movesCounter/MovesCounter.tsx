import React from "react";
import classes from "./movesCounter.module.scss";
const MovesCounter: React.FC<{ numberOfMoves: number }> = ({
  numberOfMoves,
}) => {
  return (
    <div className={classes["moves-counter"]}>
      <div className={classes["moves-counter__count-value"]}>
        {numberOfMoves}
      </div>
      <div className={classes["moves-counter__title"]}>Number of moves</div>
    </div>
  );
};
export default MovesCounter;
