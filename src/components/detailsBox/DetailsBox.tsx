import React from "react";
import classes from "./detailsBox.module.scss";
import Button from "../ui/buttons/Button";

const DetailsBox: React.FC<{ onSetRestart: () => void }> = ({
  onSetRestart,
}) => {
  return (
    <div className={classes["details-box"]}>
      <Button title="Restart the game" onClick={onSetRestart} />
    </div>
  );
};
export default DetailsBox;
