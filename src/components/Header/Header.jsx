import css from "./Header.module.css";

import logo from "../../img/logo.svg";
import darkTheme from "../../img/dark-theme-icon.svg";
import lightTheme from "../../img/light-theme-icon.svg";

export const Header = () => {
  return (
    <header className={css.appHeader}>
      <nav className={css.appNav}>
        <a href="/" className={css.logoLink}>
          <img src={logo} alt="logo" />
        </a>
        {/* <a href="/" className={css.headerTitle}>
          MENU
        </a> */}
      </nav>
      <button className={css.buttonMenu}>MENU</button>
      <button className={css.headerButton}>
        <img src={darkTheme} alt="dark-theme" />
        <img src={lightTheme} alt="light-theme" />
      </button>
    </header>
  );
};
