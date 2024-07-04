import React, { useState } from "react";
import classes from "./cartItem.module.scss";

const CartItem: React.FC<{
  value: number;
  id: string;
  selected: boolean;
  matched: boolean;
  onSetCheckMatch: (value: number, id: string) => void;
}> = ({ value, id, selected, matched, onSetCheckMatch }) => {
  const [cartClicked, setCartClicked] = useState(false);
  const onClickHandler = () => {
    setCartClicked(true);
    onSetCheckMatch(value, id);
  };
  //   console.log(cartClicked, value);
  return (
    <div className={classes["card-item"]} onClick={onClickHandler}>
      {selected && value}
    </div>
  );
};
export default CartItem;
