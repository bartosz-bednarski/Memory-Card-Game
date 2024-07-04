import React from "react";
import classes from "./gameCatButton.module.scss";

const GameCatButton: React.FC<{ onClick: () => void; title: string }> = ({
  onClick,
  title,
}) => {
  return (
    <div
      role="button"
      onClick={() => onClick()}
      className={classes["game-cat-button"]}
    >
      <span className={classes["game-cat-button__title"]}>{title}</span>

      <p>PLAY</p>
    </div>
  );
};
export default GameCatButton;
