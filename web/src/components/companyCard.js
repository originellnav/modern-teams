import React from "react";
import * as styles from "./companyCard.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import { Link } from "gatsby";
import { getCompanyUrl } from "../lib/helpers";

const companyCard = ({
  logoSrc,
  logoAlt,
  logoCap,
  companyName,
  companyExcerpt,
  companyPage,
}) => {
  const gatsbyImageData = getGatsbyImageData(
    logoSrc,
    {
      placeholder: "blurred",
      layout: "constrained",
      width: 100,
    },
    clientConfig.sanity
  );

  return (
    <article className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.icon}>
          <GatsbyImage
            image={gatsbyImageData}
            alt={logoAlt}
            caption={logoCap}
          />
        </div>
        <div className={styles.title}>{companyName}</div>
        <div className={styles.description}>{companyExcerpt}</div>
      </div>
      <div className={styles.buttonWrapper}>
        <Link to={getCompanyUrl(companyPage)} className={styles.button}>
          Read More
        </Link>
      </div>
    </article>
  );
};

export default companyCard;
