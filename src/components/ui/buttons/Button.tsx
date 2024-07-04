import React from "react";
import classes from "./button.module.scss";

const Button: React.FC<{ title: string; onClick: () => void }> = ({
  title,
  onClick,
}) => {
  return (
    <div className={classes["button"]} role="button" onClick={onClick}>
      {title}
    </div>
  );
};
export default Button;
