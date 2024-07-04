import React, { useState } from "react";
import classes from "./cartItem.module.scss";

const CartItem: React.FC<{
  value: number;
  id: string;
  selected: boolean;
  preventMultipleClicks: boolean;
  onSetCheckMatchHandler: (value: number, id: string) => void;
}> = ({
  value,
  id,
  selected,
  preventMultipleClicks,
  onSetCheckMatchHandler,
}) => {
  const onClickHandler = () => {
    if (!preventMultipleClicks) {
      onSetCheckMatchHandler(value, id);
    }
  };
  return (
    <div className={classes["card-item"]} onClick={onClickHandler}>
      {!selected && <div className={classes["card-item__reverse"]}>?</div>}
      {selected && (
        <div className={classes["card-item__front"]}>
          <span className={classes["card-item__front__sm-r"]}>{value}</span>
          <span className={classes["card-item__front__lg"]}>{value}</span>
          <span className={classes["card-item__front__sm-l"]}>{value}</span>
        </div>
      )}
    </div>
  );
};
export default CartItem;
