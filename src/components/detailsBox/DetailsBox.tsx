import React from "react";
import classes from "./detailsBox.module.scss";
import Button from "../ui/buttons/Button";
import MovesCounter from "./movesCounter/MovesCounter";

const DetailsBox: React.FC<{
  onSetRestart: () => void;
  numberOfMoves: number;
}> = ({ onSetRestart, numberOfMoves }) => {
  return (
    <div className={classes["details-box"]}>
      <MovesCounter numberOfMoves={numberOfMoves} />
      <Button title="Restart the game" onClick={onSetRestart} />
    </div>
  );
};
export default DetailsBox;
