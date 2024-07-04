import React, { useEffect, useState } from "react";
import classes from "./cardsBox.module.scss";
import CartItem from "../cardItem/CartItem";
const CardsBox: React.FC = () => {
  const fourXfour = [
    { value: 1, id: "c1", matched: false, selected: false },
    { value: 2, id: "c2", matched: false, selected: false },
    { value: 3, id: "c3", matched: false, selected: false },
    { value: 4, id: "c4", matched: false, selected: false },
    { value: 5, id: "c5", matched: false, selected: false },
    { value: 6, id: "c6", matched: false, selected: false },
    { value: 7, id: "c7", matched: false, selected: false },
    { value: 8, id: "c8", matched: false, selected: false },
    { value: 1, id: "c11", matched: false, selected: false },
    { value: 2, id: "c22", matched: false, selected: false },
    { value: 3, id: "c33", matched: false, selected: false },
    { value: 4, id: "c44", matched: false, selected: false },
    { value: 5, id: "c55", matched: false, selected: false },
    { value: 6, id: "c66", matched: false, selected: false },
    { value: 7, id: "c77", matched: false, selected: false },
    { value: 8, id: "c88", matched: false, selected: false },
  ];

  const [checkMatch, setCheckMatch] = useState<{
    data: {
      value: number;
      id: string;
      matched: boolean;
      selected: boolean;
    }[];
    lastCardValue: number | null;
    lastCardId: null | string;
  }>({
    data: fourXfour,
    lastCardValue: null,
    lastCardId: null,
  });
  const [preventMultipleClicks, setPreventMultipleClicks] = useState(false);
  // const resetPairOfCardsHandler = () => {
  //   setCheckMatch({ cardValue: null, cardId: null });
  // };
  const setCheckMatchHandler: (value: number, id: string) => void = (
    value,
    id
  ) => {
    setPreventMultipleClicks(true);
    if (checkMatch.lastCardValue === null) {
      const newData = checkMatch.data.map((item) => {
        if (item.id === id) {
          return { ...item, selected: true };
        } else {
          return { ...item };
        }
      });

      setCheckMatch({ data: newData, lastCardValue: value, lastCardId: id });
      setPreventMultipleClicks(false);
    } else {
      if (checkMatch.lastCardValue === value && checkMatch.lastCardId !== id) {
        const modifiedData = checkMatch.data.map((item) => {
          if (item.id === id || item.id === checkMatch.lastCardId) {
            return { ...item, matched: true, selected: true };
          } else {
            return { ...item };
          }
        });
        setCheckMatch({
          data: modifiedData,
          lastCardId: null,
          lastCardValue: null,
        });
        setPreventMultipleClicks(false);
      } else {
        const showCardData = checkMatch.data.map((item) => {
          if (item.id === id) {
            return { ...item, selected: true };
          } else {
            return { ...item };
          }
        });
        setCheckMatch((state) => {
          return {
            data: showCardData,
            lastCardId: state.lastCardId,
            lastCardValue: state.lastCardValue,
          };
        });
        setTimeout(() => {
          const modifiedData = checkMatch.data.map((item) => {
            if (item.id === id || item.id === checkMatch.lastCardId) {
              return { ...item, matched: false, selected: false };
            } else {
              return { ...item };
            }
          });
          setCheckMatch({
            data: modifiedData,
            lastCardId: null,
            lastCardValue: null,
          });
          setPreventMultipleClicks(false);
        }, 1000);
      }
    }
    console.log("newData", checkMatch);
  };
  // useEffect(() => {}, [checkMatch]);
  return (
    <div className={classes["cardsBox"]}>
      {checkMatch.data.map((item, index) => (
        <CartItem
          value={item.value}
          onSetCheckMatch={setCheckMatchHandler}
          id={item.id}
          key={item.id}
          selected={item.selected}
          preventMultipleClicks={preventMultipleClicks}
        />
      ))}
    </div>
  );
};
export default CardsBox;
