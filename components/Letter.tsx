import { useContext } from "react";
import { AppContext } from "../pages";

type letterProps = {
  position: number;
  attempt: number;
};

type CtxModel = {
  board: [][];
  answer: string;
  currentAttempt: any;
};

export const Letter: React.FC<letterProps> = ({ position, attempt }) => {
  const { board, answer, currentAttempt } = useContext<CtxModel>(AppContext);
  const letter: string = board[attempt][position];

  const correct: boolean = answer[position] === letter;
  const almost: boolean =
    !correct && letter !== "" && answer.toString().includes(letter);

  // const letterState =
  //   currentAttempt.attempt > attempt && correct
  //     ? "bg-gray-500"
  //     : almost
  //     ? "bg-yellow"
  //     : "bg-grey";
  const letterState = "";
  console.log(correct);

  return (
    <div
      className={`h-16 w-16 text-4xl flex border-2 border-gray-300 p-1 m-1 box-border justify-center items-center ${letterState}`}
    >
      {letter}
    </div>
  );
};
