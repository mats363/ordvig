import { useContext, useEffect, useState } from "react";
import { AppContext } from "../pages";

type letterProps = {
  letterPos: number;
  attemptVal: number;
};

type CtxModel = {
  board: [][];
  correctWord: string;
  currentAttempt: any;
};

export const Letter: React.FC<letterProps> = ({ letterPos, attemptVal }) => {
  const { board, correctWord, currentAttempt } =
    useContext<CtxModel>(AppContext);
  const letter: string = board[attemptVal][letterPos];

  const correct: boolean = correctWord[letterPos] === letter;
  const almost: boolean =
    !correct && letter !== "" && correctWord.toString().includes(letter);

  const letterState =
    currentAttempt.attempt > attemptVal &&
    (correct ? "bg-green-500" : almost ? "bg-yellow-400" : "bg-gray-500");

  return (
    <div
      className={`h-16 w-16  text-4xl flex border-2 border-gray-300 p-1 m-1 box-border justify-center items-center ${letterState}`}
    >
      {letter}
    </div>
  );
};
