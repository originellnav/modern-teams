import React from "react";
import * as styles from "./layout.module.css";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/layout.css";
import NavBar from "./navBar";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import EmailSubForm from "./emailSubForm";

const Layout = ({ children }) => {
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
  return (
    <>
      <NavBar />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <EmailSubForm />
          <article className={styles.iconContainer}>
            <p>Social Media:</p>
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
