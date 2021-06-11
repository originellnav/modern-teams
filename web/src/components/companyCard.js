import React from "react";
import * as styles from "./companyCard.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import { Link } from "gatsby";

const companyCard = ({ iconSrc, title, description }) => {
  const gatsbyImageData = getGatsbyImageData(
    iconSrc,
    { placeholder: "blurred", layout: "constrained", width: 100 },
    clientConfig.sanity
  );
  return (
    <article className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.icon}>
          <GatsbyImage image={gatsbyImageData} />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.buttonWrapper}>
        <Link to="/" className={styles.button}>
          Learn More
        </Link>
      </div>
    </article>
  );
};

export default companyCard;
