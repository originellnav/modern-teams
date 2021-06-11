import React from "react";
import * as styles from "./companyGrid.module.css";

const companyGrid = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};

export default companyGrid;
