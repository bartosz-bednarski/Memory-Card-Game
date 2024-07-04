import React from "react";
import classes from "./detailsBox.module.scss";
import RestartButton from "../ui/buttons/RestartButton";
import MovesCounter from "./movesCounter/MovesCounter";
import Timer from "./timer/Timer";
import GameCatButton from "./gameCatButton/GameCatButton";
import { GameTypes } from "../../types/games";

const DetailsBox: React.FC<{
  onSetRestart: () => void;
  numberOfMoves: number;
  onSetGameType: (type: GameTypes) => void;
  restart: boolean;
}> = ({ onSetRestart, numberOfMoves, onSetGameType, restart }) => {
  return (
    <div className={classes["details-box"]}>
      <div className={classes["details-box__row-box"]}>
        <MovesCounter numberOfMoves={numberOfMoves} />
        <Timer restart={restart} />
      </div>
      <div className={classes["details-box__row-box"]}>
        <GameCatButton
          title="4X4"
          onClick={() => {
            onSetGameType("4x4");
            onSetRestart();
          }}
        />
        <GameCatButton
          title="4X5"
          onClick={() => {
            onSetGameType("4x5");
            onSetRestart();
          }}
        />
        <GameCatButton
          title="4X6"
          onClick={() => {
            onSetGameType("4x6");
            onSetRestart();
          }}
        />
      </div>

      <RestartButton title="Restart the game" onClick={onSetRestart} />
    </div>
  );
};
export default DetailsBox;
