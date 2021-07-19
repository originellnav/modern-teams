import React, { useEffect, useRef } from "react";
import * as styles from "./sharedHeading.module.css";
import { useStaticQuery, graphql } from "gatsby";
import Typed from "typed.js";

const SharedHeading = () => {
  const data = useStaticQuery(graphql`
    query {
      home: sanityHome {
        homepageHeading
        homepageSubheading
      }
    }
  `);

  const home = (data || {}).home;
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
    <section className={styles.headerWrapper}>
      <div className={styles.headerSection}>
        <h1>{home.homepageHeading}</h1>
        <h2 style={{ whitespace: "pre" }} ref={el} />
        <div id="typed-strings">
          {home.homepageSubheading.map((node, index) => (
            <p key={index}>{node}</p>
          ))}
        </div>
        <span id="typed"></span>
      </div>
    </section>
  );
};

export default SharedHeading;
