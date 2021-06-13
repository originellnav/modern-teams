import React from "react";
import * as styles from "./navBar.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navBar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div>
          <Link to="/">
            <StaticImage
              src="../images/logo.png"
              alt="Modern Teams Logo"
              height={40}
              placeholder="blurred"
            />
          </Link>
        </div>
        <nav>
          <Link to="/" className={styles.navLink}>
            Companies
          </Link>
          <Link to="/about/" className={styles.navLink}>
            About
          </Link>
          <Link to="/archive/" className={styles.navLink}>
            Blog
          </Link>
          <Link to="/getlisted/" className={styles.button}>
            Get Listed
          </Link>
        </nav>
        <div className={styles.menu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default navBar;
