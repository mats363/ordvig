import { useState } from "react";
import { boardDefault } from "../pages/words";
import { Letter } from "./Letter";

export default function Board() {
  const [board, setBoard] = useState(boardDefault);

  return (
    <div>
      <div className="flex">
        <Letter position={0} attempt={0} />
        <Letter position={1} attempt={0} />
        <Letter position={2} attempt={0} />
        <Letter position={3} attempt={0} />
        <Letter position={4} attempt={0} />
      </div>
      <div className="flex">
        <Letter position={0} attempt={1} />
        <Letter position={1} attempt={1} />
        <Letter position={2} attempt={1} />
        <Letter position={3} attempt={1} />
        <Letter position={4} attempt={1} />
      </div>
      <div className="flex">
        <Letter position={0} attempt={2} />
        <Letter position={1} attempt={2} />
        <Letter position={2} attempt={2} />
        <Letter position={3} attempt={2} />
        <Letter position={4} attempt={2} />
      </div>
      <div className="flex">
        <Letter position={0} attempt={3} />
        <Letter position={1} attempt={3} />
        <Letter position={2} attempt={3} />
        <Letter position={3} attempt={3} />
        <Letter position={4} attempt={3} />
      </div>
      <div className="flex">
        <Letter position={0} attempt={4} />
        <Letter position={1} attempt={4} />
        <Letter position={2} attempt={4} />
        <Letter position={3} attempt={4} />
        <Letter position={4} attempt={4} />
      </div>
      <div className="flex">
        <Letter position={0} attempt={5} />
        <Letter position={1} attempt={5} />
        <Letter position={2} attempt={5} />
        <Letter position={3} attempt={5} />
        <Letter position={4} attempt={5} />
      </div>
    </div>
  );
}
