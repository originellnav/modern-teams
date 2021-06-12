import React from "react";
import * as styles from "./companyPage.module.css";
import PortableText from "./portableText";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

const companyPage = (props) => {
  const { _rawCompanyBody, companyName, categories, companyLogo } = props;
  const gatsbyImageData = getGatsbyImageData(
    companyLogo,
    {
      placeholder: "blurred",
      layout: "constrained",
      width: 200,
    },
    clientConfig.sanity
  );
  return (
    <article className={styles.root}>
      <div className={styles.wrapper}>
        <GatsbyImage
          image={gatsbyImageData}
          alt={companyLogo.alt}
          caption={companyLogo.caption}
        />
        <h1 className={styles.heading}>{companyName}</h1>
        <div className={styles.body}>
          {_rawCompanyBody && <PortableText blocks={_rawCompanyBody} />}
        </div>
        <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li className={styles.categoryItem} key={category._id}>
              {category.title}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default companyPage;
