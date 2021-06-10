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
        <div className={styles.topRow}>
          <Link to="/" className={styles.inactive}>
            Accessories
          </Link>
        </div>
        <div className={styles.bottomRow}>Second Row</div>
      </section>
    </div>
  );
};

export default homeHeader;
