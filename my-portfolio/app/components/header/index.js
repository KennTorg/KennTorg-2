import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.home_header}>
      <a href='/' className={styles.logo}>
        KennTorg | Portfolio 2
      </a>
      <nav className={styles.nav_links}>
        <ul className={styles.nav_menu}>
          <li className={styles.nav_link}>
            <a href='#about'>About</a>
          </li>
          <li className={styles.nav_link}>
            <a href='#work'>Work</a>
          </li>
          <li className={styles.nav_link}>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
