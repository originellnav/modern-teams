import React from "react";
import * as styles from "./homepageHeader.module.css";

const HomepageHeader = () => {
  return (
    <section className={styles.root}>
      <h1>Find a job that makes you happy.</h1>
      <h2>
        Modern Teams is a community of forward-thinking companies showcasing
        their culture and new ways of working.
      </h2>
    </section>
  );
};

export default HomepageHeader;
