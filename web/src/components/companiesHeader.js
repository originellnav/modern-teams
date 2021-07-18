import React, { useEffect, useRef } from "react";
import * as styles from "./companiesHeader.module.css";
import { useStaticQuery, graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import { Link } from "gatsby";
import { getCategoryUrl } from "../lib/helpers";
import Typed from "typed.js";

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
      companyPage: sanityCompanies {
        homepageHeading
        homepageSubheading
      }
    }
  `);

  const categories =
    data && data.categories && mapEdgesToNodes(data.categories);
  const companyPage = (data || {}).companyPage;
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      stringsElement: "#typed-strings",
      typeSpeed: 80,
      backSpeed: 10,
      loop: true,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <section className={styles.headerSection}>
        <h1>{companyPage.homepageHeading}</h1>
        <h2 style={{ whitespace: "pre" }} ref={el} />
        <div id="typed-strings">
          {companyPage.homepageSubheading.map((node, index) => (
            <p key={index}>{node}</p>
          ))}
        </div>
        <span id="typed"></span>
      </section>
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
