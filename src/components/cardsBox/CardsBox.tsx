import React, { useEffect, useState } from "react";
import classes from "./cardsBox.module.scss";
import CartItem from "../cardItem/CartItem";
import { shuffleArray } from "../../utils/scripts/shuffle";
import { Card, GameTypes } from "../../types/games";
const CardsBox: React.FC<{
  restart: boolean;
  gameType: { data: Card[]; title: GameTypes };
  onRestartComplete: () => void;
  onSetNumberOfMoves: () => void;
  onSetGameWon: () => void;
}> = ({
  restart,
  gameType,
  onRestartComplete,
  onSetNumberOfMoves,
  onSetGameWon,
}) => {
  const [cardsDetails, setCardsDetails] = useState<{
    data: Card[];
    lastCardValue: number | null;
    lastCardId: null | string;
  }>({
    data: shuffleArray(gameType.data),
    lastCardValue: null,
    lastCardId: null,
  });
  const [preventMultipleClicks, setPreventMultipleClicks] = useState(false);
  const setCheckMatchHandler: (value: number, id: string) => void = (
    value,
    id
  ) => {
    setPreventMultipleClicks(true);
    if (
      cardsDetails.data.find((item) => item.matched === false) !== undefined
    ) {
      onSetNumberOfMoves();
    }

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
  };
  useEffect(() => {
    if (
      cardsDetails.data.find((item) => item.matched === false) === undefined
    ) {
      onSetGameWon();
      console.log("GG");
    }
  }, [cardsDetails]);
  useEffect(() => {
    if (restart === true) {
      setCardsDetails({
        data: shuffleArray(gameType.data),
        lastCardId: null,
        lastCardValue: null,
      });
    }
    onRestartComplete();
  }, [restart]);
  useEffect(() => {
    setCardsDetails({
      data: gameType.data,
      lastCardId: null,
      lastCardValue: null,
    });
  }, [gameType]);
  return (
    <>
      {cardsDetails.data.find((item) => item.matched === false) !==
        undefined && (
        <div
          className={`${classes["cardsBox"]} ${
            classes[`box${gameType.title}`]
          }`}
        >
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
      )}

      {cardsDetails.data.find((item) => item.matched === false) ===
        undefined && (
        <div className={classes["win-box"]}>
          You Win!
          <br />
          Good Game!
        </div>
      )}
    </>
  );
};
export default CardsBox;
