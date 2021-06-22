import React from "react";
import * as styles from "./about.module.css";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Container from "../components/container";
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
      <Container>
        <div className={styles.root}>
          {about._rawAboutBody && <PortableText blocks={about._rawAboutBody} />}
        </div>
      </Container>
    </>
  );
};

export default About;
