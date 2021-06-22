import React from "react";
import * as styles from "./companyGrid.module.css";

const CompanyGrid = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};

export default CompanyGrid;
