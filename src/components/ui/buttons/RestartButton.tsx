import React from "react";
import classes from "./restartButton.module.scss";

const RestartButton: React.FC<{ title: string; onClick: () => void }> = ({
  title,
  onClick,
}) => {
  return (
    <div className={classes["restart-button"]} role="button" onClick={onClick}>
      {title}
    </div>
  );
};
export default RestartButton;
