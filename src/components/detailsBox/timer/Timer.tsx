import React from "react";
import classes from "./timer.module.scss";

const Timer: React.FC = () => {
  return (
    <div className={classes["timer"]}>
      <div className={classes["timer__count-value"]}>234</div>
      <div className={classes["timer__title"]}>Timer</div>
    </div>
  );
};
export default Timer;
