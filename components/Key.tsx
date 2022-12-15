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
      className={`bg-blue ${isBig ? "bg-grey" : "bg-grey"} p-1 m-1 border-4`}
      onClick={handleClick}
    >
      {val}
    </div>
  );
};
