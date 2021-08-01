import React, { useState } from "react";
import * as styles from "./layout.module.css";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/layout.css";
import NavBar from "./navBar";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import EmailSubForm from "./emailSubForm";
import { useScrollPosition } from "../components/useScrollPosition";

const Layout = ({ children }) => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = prevPos.y > currPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );
  const data = useStaticQuery(graphql`
    query {
      footer: sanityFooter {
        formText
        socialItems {
          icon {
            asset {
              _id
            }
          }
          title
          url
          _key
        }
      }
    }
  `);

  const footer = (data || {}).footer;
  const stickyVariant = sticky ? "" : styles.sticky;
  const spacingFix = sticky ? "" : styles.contentSticky;
  return (
    <>
      <NavBar />
      <div className={`${styles.content} ${spacingFix}`}>{children}</div>
      <footer className={`${styles.footer} ${stickyVariant}`}>
        <div className={styles.wrapper}>
          <EmailSubForm />
          <article className={styles.iconContainer}>
            <p>Say Hi on Twitter:</p>
            {footer.socialItems.map((socialItem) => (
              <span key={socialItem._key}>
                <a href={socialItem.url}>
                  <img
                    src={imageUrlFor(buildImageObj(socialItem.icon))
                      .width(20)
                      .height(20)
                      .auto("format")}
                    className={styles.socialIcon}
                    alt="Social Icon"
                  />
                </a>
              </span>
            ))}
          </article>
        </div>
      </footer>
    </>
  );
};

export default Layout;
