// import { NavLink } from "react-router-dom";

import icon from "../../img/main-icon.png";
import theme from "../../img/theme.png";

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={icon} alt="main-icon" />
        <p>MENU</p>
      </nav>
      <button>
        <img src={theme} alt="theme" />
      </button>
    </header>
  );
};
