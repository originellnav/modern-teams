import React from "react";
import NavBar from "./navBar";
import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
