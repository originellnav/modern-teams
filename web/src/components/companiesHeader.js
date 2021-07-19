import React from "react";
import * as styles from "./companiesHeader.module.css";
import { useStaticQuery, graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import { Link } from "gatsby";
import { getCategoryUrl } from "../lib/helpers";
import SharedHeading from "./sharedHeading";

const CompaniesHeader = () => {
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
      <SharedHeading />
      <section className={styles.categoryTitle}>
        Select your preferred benefit to find teams that match:
      </section>
      <section className={styles.categories}>
        <span className={styles.activeWrapper}>
          <Link
            to="/companies/"
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

export default CompaniesHeader;
