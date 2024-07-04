import React, { useEffect, useState } from "react";
import classes from "./cardsBox.module.scss";
import CartItem from "../cardItem/CartItem";
import { fourXfour } from "../../utils/data/gamesTypes";
import { shuffleArray } from "../../utils/scripts/shuffle";
const CardsBox: React.FC<{
  restart: boolean;
  onRestartComplete: () => void;
}> = ({ restart, onRestartComplete }) => {
  const [cardsDetails, setCardsDetails] = useState<{
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
    if (cardsDetails.lastCardValue === null) {
      const newData = cardsDetails.data.map((item) => {
        if (item.id === id) {
          return { ...item, selected: true };
        } else {
          return { ...item };
        }
      });

      setCardsDetails({ data: newData, lastCardValue: value, lastCardId: id });
      setPreventMultipleClicks(false);
    } else {
      if (
        cardsDetails.lastCardValue === value &&
        cardsDetails.lastCardId !== id
      ) {
        const modifiedData = cardsDetails.data.map((item) => {
          if (item.id === id || item.id === cardsDetails.lastCardId) {
            return { ...item, matched: true, selected: true };
          } else {
            return { ...item };
          }
        });
        setCardsDetails({
          data: modifiedData,
          lastCardId: null,
          lastCardValue: null,
        });
        setPreventMultipleClicks(false);
      } else {
        const showCardData = cardsDetails.data.map((item) => {
          if (item.id === id) {
            return { ...item, selected: true };
          } else {
            return { ...item };
          }
        });
        setCardsDetails((state) => {
          return {
            data: showCardData,
            lastCardId: state.lastCardId,
            lastCardValue: state.lastCardValue,
          };
        });
        setTimeout(() => {
          const modifiedData = cardsDetails.data.map((item) => {
            if (item.id === id || item.id === cardsDetails.lastCardId) {
              return { ...item, matched: false, selected: false };
            } else {
              return { ...item };
            }
          });
          setCardsDetails({
            data: modifiedData,
            lastCardId: null,
            lastCardValue: null,
          });
          setPreventMultipleClicks(false);
        }, 1000);
      }
    }
    console.log("newData", cardsDetails);
  };
  useEffect(() => {
    if (
      cardsDetails.data.find((item) => item.matched === false) === undefined
    ) {
      console.log("GG");
    }
  }, [cardsDetails]);
  useEffect(() => {
    if (restart === true) {
      setCardsDetails({
        data: shuffleArray(fourXfour),
        lastCardId: null,
        lastCardValue: null,
      });
    }
    onRestartComplete();
  }, [restart]);
  return (
    <div className={classes["cardsBox"]}>
      {cardsDetails.data.map((item, index) => (
        <CartItem
          value={item.value}
          onSetCheckMatchHandler={setCheckMatchHandler}
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
