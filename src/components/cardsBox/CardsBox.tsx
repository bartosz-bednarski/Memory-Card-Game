import React from "react";
import classes from "./cardsBox.module.scss";
import CartItem from "../cardItem/CartItem";
const CardsBox: React.FC = () => {
  const checkArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className={classes["cardsBox"]}>
      {checkArr.map((item) => (
        <CartItem />
      ))}
    </div>
  );
};
export default CardsBox;
