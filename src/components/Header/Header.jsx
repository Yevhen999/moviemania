import css from "./Header.module.css";

import icon from "../../img/main-icon.png";
import theme from "../../img/theme-switcher.png";

export const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <img src={icon} alt="main-icon" />
        <p className={css.headerTitle}>MENU</p>
      </nav>
      <button>
        <img src={theme} alt="theme" />
      </button>
    </header>
  );
};
