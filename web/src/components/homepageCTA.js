import React from "react";
import * as styles from "./homepageCTA.module.css";
import EmailSubForm from "./emailSubForm";

const HomepageCTA = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <EmailSubForm />
      </div>
    </section>
  );
};

export default HomepageCTA;
