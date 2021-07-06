import React from "react";
import * as styles from "./about.module.css";
import Seo from "../components/seo";
import { graphql } from "gatsby";
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
      <Seo title={about.title} />
      <main className={styles.root}>
        <article className={styles.mainContent}>
          {about._rawAboutBody && <PortableText blocks={about._rawAboutBody} />}
        </article>
      </main>
    </>
  );
};

export default About;
