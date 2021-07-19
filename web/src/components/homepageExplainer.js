import React from "react";
import * as styles from "./homepageExplainer.module.css";

const HomepageExplainer = ({ teamFeatures }) => {
  return (
    <section className={styles.root}>
      <span className={styles.title}>Benefits of Modern Teams</span>
      <ul>
        {teamFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  );
};

export default HomepageExplainer;
