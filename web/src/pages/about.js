import React from "react";
import * as styles from "./about.module.css";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PortableText from "../components/portableText";

export const query = graphql`
  query AboutPageQuery {
    about: sanityAbout {
      title
      _rawAboutBody
    }
  }
`;

const About = (props) => {
  const { data } = props;
  const about = (data || {}).about;

  return (
    <>
      <SEO title={about.title} />
      <main className={styles.root}>
        <section className={styles.imageRow}>
          <span className={styles.imageWrapper}>
            <StaticImage
              src="../images/lukepic.jpeg"
              className={styles.headerPic}
            />
          </span>
        </section>
        <section className={styles.mainBackground}>
          <article className={styles.mainContent}>
            {about._rawAboutBody && (
              <PortableText blocks={about._rawAboutBody} />
            )}
          </article>
        </section>
      </main>
    </>
  );
};

export default About;
