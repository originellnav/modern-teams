import React from "react";
import * as styles from "./homeHeader.module.css";
import { Link } from "gatsby";

const homeHeader = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.headerSection}>
        <h1>Find forward-thinking companies</h1>
        <h2>Work from anywhere</h2>
      </section>
      <section className={styles.categories}>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <Link to="/" className={styles.inactive}>
          Category
        </Link>
        <div className={styles.activeWrapper}>
          <Link to="/" className={styles.active}>
            Category
          </Link>
        </div>
      </section>
    </div>
  );
};

export default homeHeader;
