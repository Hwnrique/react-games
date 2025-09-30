import { TfiSpray } from "react-icons/tfi";

import classe from "./TransformBtn.module.css";
import { useState, useEffect } from "react";

const TransformBtn = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkTheme) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light")
    }
  }, [darkTheme]);

  return (
    <>
      <button className={classe.btn} onClick={() => setDarkTheme(prev => !prev)}>
        <TfiSpray/>
        Theme
      </button>
    </>
  );
};

export default TransformBtn;
