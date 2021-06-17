import React from "react";
import * as styles from "./homeHeader.module.css";
import { useStaticQuery, graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import { Link } from "gatsby";
import { getCategoryUrl } from "../lib/helpers";

const homeHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      categories: allSanityCategory(sort: { order: ASC, fields: title }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
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
          <Link
            to="/"
            className={styles.underline}
            activeClassName={styles.active}
          >
            All
          </Link>
        </span>

        {categories.map((node) => (
          <Link
            to={getCategoryUrl(node.slug.current)}
            className={styles.underline}
            activeClassName={styles.active}
            key={node.id}
          >
            {node.title}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default homeHeader;
