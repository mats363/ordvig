import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../pages";
import { Key } from "./Key";

export const Keyboard: React.FC = () => {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback(
    (e: any) => {
      if (e.key === "Enter") {
        onEnter();
      } else if (e.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [keys1, keys2, keys3, onEnter, onDelete, onSelectLetter]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div
      id="container"
      className="flex flex-col items-center m-4"
      onKeyDown={handleKeyboard}
    >
      <div className="p-1">
        <div className="flex">
          {keys1.map((key) => {
            return <Key val={key} key={key} />;
          })}
        </div>
      </div>

      <div className="middle">
        <div className="flex">
          {keys2.map((key) => {
            return <Key val={key} key={key} />;
          })}
        </div>
      </div>
      <div className="bottom">
        <div className="flex">
          <Key val="ENTER" isBig={true} />
          {keys3.map((key) => {
            return <Key val={key} key={key} />;
          })}
          <Key val="DELETE" isBig={true} />
        </div>
      </div>
    </div>
  );
};
