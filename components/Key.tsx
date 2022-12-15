import { useContext } from "react";
import { AppContext } from "../pages";

type KeyProps = {
  val: string;
  isBig?: boolean;
};

export const Key: React.FC<KeyProps> = ({ val, isBig }) => {
  const { onDelete, onSelectLetter, onEnter } = useContext(AppContext);

  const handleClick = () => {
    if (val === "ENTER") {
      onEnter();
    } else if (val === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(val);
    }
  };
  return (
    <div
      className={`bg-blue ${
        isBig ? "w-fit" : "w-10"
      }  text-2xl p-2 m-1 border-1 rounded-md flex items-center justify-center bg-slate-100 h-16`}
      onClick={handleClick}
    >
      {val}
    </div>
  );
};
