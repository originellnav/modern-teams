import React, { useState } from "react";
import * as styles from "./navBar.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link, StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
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
                    callToAction
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
                              className={
                                navItems.navItemUrl.callToAction
                                  ? styles.button
                                  : styles.navLink
                              }
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
              <div className={styles.mobileNav}>
                <button onClick={handleToggle}>
                  <FontAwesomeIcon
                    icon={navbarOpen ? faTimes : faBars}
                    size="2x"
                    color="#000"
                  />
                </button>

                {data &&
                  data.nav.edges.map(({ node: nav, index }) => (
                    <>
                      <ul
                        className={
                          navbarOpen ? styles.showMenu : styles.menuNav
                        }
                      >
                        {nav.navItems.map((navItems) => (
                          <li key={index}>
                            {navItems.navItemUrl.externalContent ? (
                              <a
                                href={navItems.navItemUrl.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.mobileNavLink}
                                onClick={() => closeMenu()}
                              >
                                {navItems.text}
                              </a>
                            ) : (
                              <Link
                                to={navItems.navItemUrl.linkUrl}
                                className={
                                  navItems.navItemUrl.callToAction
                                    ? styles.mobileButton
                                    : styles.mobileNavLink
                                }
                                onClick={() => closeMenu()}
                              >
                                {navItems.text}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default NavBar;
