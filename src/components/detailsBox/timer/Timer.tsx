import React, { useEffect, useRef, useState } from "react";
import classes from "./timer.module.scss";

const Timer: React.FC<{ restart: boolean; gameWon: boolean }> = ({
  restart,
  gameWon,
}) => {
  const [time, setTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (gameWon) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
    if (!gameWon) {
      if (restart) {
        setTime(0);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }
      timerRef.current = setTimeout(() => {
        setTime((state) => (state += 1));
      }, 1000);
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [time, restart, gameWon]);
  return (
    <div className={classes["timer"]}>
      <div className={classes["timer__count-value"]}>{time} sec</div>
      <div className={classes["timer__title"]}>Timer</div>
    </div>
  );
};
export default Timer;
