import React from "react";
import * as styles from "./companyGrid.module.css";
import CompanyCard from "./companyCard";

const companyGrid = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <CompanyCard
          iconSrc="../images/doist.png"
          title="Company Title"
          description="Yada yada yada yada yada yada yada yada yada"
        />
        <CompanyCard
          iconSrc="../images/doist.png"
          title="Company Title"
          description="Yada yada yada yada yada yada yada yada yada"
        />
        <CompanyCard
          iconSrc="../images/doist.png"
          title="Company Title"
          description="Yada yada yada yada yada yada yada yada yada"
        />
        <CompanyCard
          iconSrc="../images/doist.png"
          title="Company Title"
          description="Yada yada yada yada yada yada yada yada yada"
        />
        <CompanyCard
          iconSrc="../images/doist.png"
          title="Company Title"
          description="Yada yada yada yada yada yada yada yada yada"
        />
        <CompanyCard
          iconSrc="../images/doist.png"
          title="Company Title"
          description="Yada yada yada yada yada yada yada yada yada"
        />
        <CompanyCard
          iconSrc="../images/doist.png"
          title="Company Title"
          description="Yada yada yada yada yada yada yada yada yada"
        />
        <CompanyCard
          iconSrc="../images/doist.png"
          title="Company Title"
          description="Yada yada yada yada yada yada yada yada yada"
        />
        <CompanyCard
          iconSrc="../images/doist.png"
          title="Company Title"
          description="Yada yada yada yada yada yada yada yada yada"
        />
      </div>
    </section>
  );
};

export default companyGrid;
