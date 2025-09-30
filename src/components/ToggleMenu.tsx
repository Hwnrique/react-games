import "./ToggleMenu.css";
import { useState } from "react";

type ToggleMenuProps = {
  onClick?: () => void;
};

const ToggleMenu = ({ onClick }: ToggleMenuProps) => {
  const [button, setButton] = useState<boolean>(false);

  const animationBtn = () => {
    setButton(prev => !prev);

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      id="btn-menu"
      onClick={animationBtn}
      className={button ? "active" : ""}
    >
      <span className="linha"></span>
      <span className="linha"></span>
      <span className="linha"></span>
    </button>
  );
};

export default ToggleMenu;
