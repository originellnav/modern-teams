import React from "react";
import * as styles from "./featuredGrid.module.css";

const FeaturedGrid = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};

export default FeaturedGrid;
