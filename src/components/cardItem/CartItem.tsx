import React, { useState } from "react";
import classes from "./cartItem.module.scss";

const CartItem: React.FC<{
  value: number;
  id: string;
  selected: boolean;
  preventMultipleClicks: boolean;
  onSetCheckMatch: (value: number, id: string) => void;
}> = ({ value, id, selected, preventMultipleClicks, onSetCheckMatch }) => {
  const onClickHandler = () => {
    if (!preventMultipleClicks) {
      onSetCheckMatch(value, id);
    }
  };
  return (
    <div className={classes["card-item"]} onClick={onClickHandler}>
      {selected && value}
    </div>
  );
};
export default CartItem;
