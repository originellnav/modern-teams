import React from "react";
import * as styles from "./jobCard.module.css";
import { Link } from "gatsby";

const JobCard = () => {
  return (
    <article className={styles.root}>
      <h4>Company Name</h4>
      <div className={styles.centerContent}>
        <p className={styles.location}>City, State</p>
        <p className={styles.time}>Full Time</p>
      </div>

      <Link to="#" className={styles.applyBtn}>
        Apply
      </Link>
    </article>
  );
};

export default JobCard;
