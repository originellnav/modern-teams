import React from "react";
import * as styles from "./featuredGrid.module.css";
import { Link } from "gatsby";

const FeaturedGrid = ({ children }) => {
  return (
    <section className={styles.container}>
      <span className={styles.title}>Featured Teams</span>
      <div className={styles.wrapper}>{children}</div>
      <Link to="/companies/" className={styles.link}>
        See all companies listed on Modern Teams
      </Link>
    </section>
  );
};

export default FeaturedGrid;
