import React from "react";
import * as styles from "./navBar.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link, StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <StaticQuery
      query={graphql`
        query HeaderNav {
          nav: allSanityNav(filter: { title: { eq: "Main Navigation" } }) {
            edges {
              node {
                navItems {
                  text
                  _key
                  navItemUrl {
                    linkUrl
                    externalContent
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={styles.root}>
          <div className={styles.wrapper}>
            <div>
              <Link to="/">
                <StaticImage
                  src="../images/tentativeLogo.png"
                  alt="Modern Teams Logo"
                  height={40}
                  placeholder="blurred"
                />
              </Link>
            </div>
            <nav>
              {data &&
                data.nav.edges.map(({ node: nav }) => (
                  <>
                    <span className={styles.desktopNav}>
                      {nav.navItems.map((navItems) => (
                        <span key={navItems._key}>
                          {navItems.navItemUrl.externalContent ? (
                            <a
                              href={navItems.navItemUrl.linkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.navLink}
                            >
                              {navItems.text}
                            </a>
                          ) : (
                            <Link
                              to={navItems.navItemUrl.linkUrl}
                              className={navItems.navItemUrl.}
                            >
                              {navItems.text}
                            </Link>
                          )}
                        </span>
                      ))}
                    </span>
                  </>
                ))}
            </nav>
            <div className={styles.menu}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default NavBar;
