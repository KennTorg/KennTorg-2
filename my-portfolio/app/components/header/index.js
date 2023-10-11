"use client";

import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const preventDefault = (e) => {
    e.preventDefault();

    scrollToSection(e.target.getAttribute("href").substring(1));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.home_header} ${isSticky ? styles.sticky : ""}`}
    >
      <div className={styles.logo} onClick={scrollToTop}>
        <span> KennTorg | Portfolio 2</span>
      </div>
      <nav className={styles.nav_links}>
        <ul className={styles.nav_menu}>
          <li className={styles.nav_link}>
            <a
              href='#about'
              className={styles.nav_text_link}
              onClick={preventDefault}
            >
              About
            </a>
          </li>
          <li className={styles.nav_link}>
            <a
              href='#work'
              className={styles.nav_text_link}
              onClick={preventDefault}
            >
              Work
            </a>
          </li>
          <li className={styles.nav_link}>
            <a
              href='#contact'
              className={styles.nav_text_link}
              onClick={preventDefault}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
