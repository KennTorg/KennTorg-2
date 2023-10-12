"use client";

import React from "react";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <span className={styles.copy}>
          Copyright &copy; KennTorg | Portfolio2 | 2023
        </span>
      </div>
      <div className={styles.icons}>
        <a href='https://www.facebook.com'>
          <FontAwesomeIcon icon={faFacebookSquare} className={styles.icon} />
        </a>
        <a href='https://www.instagram.com'>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a href='https://twitter.com/home'>
          <FontAwesomeIcon icon={faTwitterSquare} className={styles.icon} />
        </a>
        <a href='https://github.com/KennTorg'>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <a href='https://www.linkedin.com/'>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
