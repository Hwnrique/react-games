import { DiReact } from "react-icons/di";
import { Link } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";
import { useState } from "react";

import classe from "./Navbar.module.css";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const showMenu = () => {
    setTimeout(() => {
      setMenu((prev) => !prev)
    }, 150);
  };

  return (
    <nav className={classe.navbar}>
      <DiReact className={classe.logo} />
      <h3>React Games</h3>
      <ToggleMenu onClick={showMenu} />
      <ul className={`${classe.nav_list} ${menu ? classe.visible : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/followus">Follow Us</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
