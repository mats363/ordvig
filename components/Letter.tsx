import { useContext } from "react";
import { AppContext } from "../pages";

type letterProps = {
  position: number;
  attempt: number;
};

type CtxModel = {
  board: [][];
  answer: string;
};

export const Letter: React.FC<letterProps> = ({ position, attempt }) => {
  const { board, answer } = useContext<CtxModel>(AppContext);
  const letter = board[attempt][position];

  const correct: boolean = answer[position] === letter;
  const almost: boolean =
    !correct && letter !== "" && answer.toString().includes("a");

  const letterState = correct ? "Correct" : almost ? "Almost" : "Error";

  return (
    <div className="h-16 w-16 text-4xl flex border-2 border-gray-300 p-1 m-1 box-border justify-center items-center">
      {letter}
    </div>
  );
};
