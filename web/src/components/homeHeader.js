import React, { useState } from "react";
import * as styles from "./homeHeader.module.css";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

const homeHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      categories: allSanityCategory(sort: { order: ASC, fields: title }) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);

  const categories =
    data && data.categories && mapEdgesToNodes(data.categories);

  return (
    <div className={styles.wrapper}>
      <section className={styles.headerSection}>
        <h1>Find forward-thinking companies</h1>
        <h2>Work from anywhere</h2>
      </section>
      <section className={styles.categories}>
        <span className={styles.activeWrapper}>
          <Link to="/" className={styles.active}>
            All
          </Link>
        </span>

        {categories.map((node) => (
          <button className={styles.underline} key={node.id}>
            {node.title}
          </button>
        ))}
      </section>
    </div>
  );
};

export default homeHeader;
