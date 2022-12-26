import { GetServerSideProps } from "next";
import React, { createContext, useState } from "react";
import Board from "../components/Board";
import { Keyboard } from "../components/Keyboard";
import { boardDefault } from "./words";

type AttemptModel = {
  attempt: number;
  letterPosition: number;
};

export const AppContext = createContext<any>(boardDefault);

export const getServerSideProps: GetServerSideProps = async () => {
  const answer: string = answers[Math.floor(Math.random() * answers.length)];

  return { props: { answer } };
};

export default function App(answer: string) {
  console.log(answer[1] + "hej");
  const [board, setBoard] = useState<any[][]>(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState<any>({
    attempt: 0,
    letterPosition: 0,
  });

  const correctWord: string = "FLUGA";

  const onSelectLetter = (keyVal: string) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    if (currentAttempt) {
      newBoard[currentAttempt?.attempt][
        currentAttempt && currentAttempt?.letterPosition
      ] = keyVal;
      setBoard(newBoard);
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition + 1,
      });
    }
  };
  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };
  const onEnter = () => {
    if (currentAttempt.letterPosition !== 5) return;
    setCurrentAttempt({
      attempt: currentAttempt.attempt + 1,
      letterPosition: 0,
    });
  };
  return (
    <main>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
        }}
      >
        <div className="container-sm flex justify-center items-center flex-col">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </main>
  );
}
